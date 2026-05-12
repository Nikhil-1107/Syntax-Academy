import json
import os
import re
import threading
import time
from decimal import Decimal, ROUND_HALF_UP

import requests
from django.conf import settings

BASE_CURRENCY = "INR"
DEFAULT_CURRENCY = "INR"
RATES_URL = "https://open.er-api.com/v6/latest/INR"
RATE_TTL_SECONDS = 6 * 60 * 60

_DATA_CACHE = {
    "loaded": False,
    "dial_to_currency": {},
    "country_to_currency": {},
}

_RATES_CACHE = {
    "timestamp": 0.0,
    "rates": {},
}

_CACHE_LOCK = threading.Lock()


def _country_data_path():
    return os.path.join(settings.BASE_DIR, "app1", "static", "data", "country-codes.json")


def _load_country_data():
    path = _country_data_path()
    if not os.path.exists(path):
        return []

    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def _extract_currency_code(item):
    currencies = item.get("currencies") or {}
    if isinstance(currencies, dict) and currencies:
        return sorted(currencies.keys())[0]
    return None


def _extract_country_code(item):
    country_code = item.get("cca2") or ""
    if isinstance(country_code, str) and country_code:
        return country_code.upper()
    return None


def _derive_dial_code(item):
    idd = item.get("idd") or {}
    root = idd.get("root") or ""
    suffixes = idd.get("suffixes") or []

    if root and suffixes:
        if len(suffixes) == 1:
            return f"{root}{suffixes[0]}"
        return root

    return None


def _build_dial_code_currency_map():
    mapping = {}
    for item in _load_country_data():
        dial_code = _derive_dial_code(item)
        currency_code = _extract_currency_code(item)

        if dial_code and currency_code and dial_code not in mapping:
            mapping[dial_code] = currency_code

    return mapping


def _build_country_currency_map():
    mapping = {}
    for item in _load_country_data():
        country_code = _extract_country_code(item)
        currency_code = _extract_currency_code(item)

        if country_code and currency_code and country_code not in mapping:
            mapping[country_code] = currency_code

    return mapping


def get_dial_code_currency_map():
    if _DATA_CACHE["loaded"]:
        return _DATA_CACHE["dial_to_currency"]

    with _CACHE_LOCK:
        if _DATA_CACHE["loaded"]:
            return _DATA_CACHE["dial_to_currency"]

        _DATA_CACHE["dial_to_currency"] = _build_dial_code_currency_map()
        _DATA_CACHE["country_to_currency"] = _build_country_currency_map()
        _DATA_CACHE["loaded"] = True
        return _DATA_CACHE["dial_to_currency"]


def get_country_currency_map():
    if _DATA_CACHE["loaded"]:
        return _DATA_CACHE["country_to_currency"]

    get_dial_code_currency_map()
    return _DATA_CACHE["country_to_currency"]


def normalize_country_code_input(value, default_code="IN"):
    if not value:
        return default_code

    raw_value = str(value).strip()
    if not raw_value:
        return default_code

    if "|" in raw_value:
        raw_value = raw_value.split("|", 1)[0].strip()

    if not raw_value:
        return default_code

    if raw_value.startswith("+") or re.search(r"\d", raw_value):
        dial_value = re.sub(r"[^\d+]", "", raw_value)
        if dial_value and not dial_value.startswith("+"):
            dial_value = f"+{dial_value}"
        if not dial_value or dial_value == "+":
            return default_code
        if dial_value == "+1":
            return "US"
        return dial_value

    return raw_value.upper()


def get_currency_for_country_code(country_code):
    if not country_code:
        return DEFAULT_CURRENCY

    normalized = str(country_code).strip()
    if "|" in normalized:
        normalized = normalized.split("|", 1)[0].strip()

    if not normalized:
        return DEFAULT_CURRENCY

    if normalized.startswith("+") or re.search(r"\d", normalized):
        dial_value = re.sub(r"[^\d+]", "", normalized)
        if dial_value and not dial_value.startswith("+"):
            dial_value = f"+{dial_value}"
        if dial_value == "+1":
            return "USD"
        return get_dial_code_currency_map().get(dial_value, DEFAULT_CURRENCY)

    normalized = normalized.upper()
    return get_country_currency_map().get(
        normalized,
        get_dial_code_currency_map().get(normalized, DEFAULT_CURRENCY),
    )


def _fetch_rates():
    response = requests.get(RATES_URL, timeout=12)
    response.raise_for_status()
    payload = response.json()
    rates = payload.get("rates")
    if isinstance(rates, dict):
        return rates
    return {}


def get_exchange_rates():
    now = time.time()
    if _RATES_CACHE["rates"] and now - _RATES_CACHE["timestamp"] < RATE_TTL_SECONDS:
        return _RATES_CACHE["rates"]

    with _CACHE_LOCK:
        now = time.time()
        if _RATES_CACHE["rates"] and now - _RATES_CACHE["timestamp"] < RATE_TTL_SECONDS:
            return _RATES_CACHE["rates"]

        try:
            rates = _fetch_rates()
        except Exception:
            return _RATES_CACHE["rates"]

        if rates:
            _RATES_CACHE["rates"] = rates
            _RATES_CACHE["timestamp"] = now

        return _RATES_CACHE["rates"]


def get_exchange_rate(currency_code):
    if not currency_code:
        currency_code = DEFAULT_CURRENCY

    currency_code = currency_code.upper()
    if currency_code == BASE_CURRENCY:
        return Decimal("1")

    rates = get_exchange_rates()
    rate = rates.get(currency_code)
    if rate is None:
        return Decimal("1")

    return Decimal(str(rate))


def _get_currency_decimals(currency_code):
    currency_code = (currency_code or DEFAULT_CURRENCY).upper()
    return 0 if currency_code == BASE_CURRENCY else 2


def convert_amount(amount, currency_code, rate):
    if amount is None or amount == "":
        return Decimal("0")

    try:
        value = Decimal(str(amount))
    except Exception:
        return Decimal("0")

    currency_code = (currency_code or DEFAULT_CURRENCY).upper()

    try:
        rate_value = Decimal(str(rate))
    except Exception:
        rate_value = Decimal("1")

    decimals = _get_currency_decimals(currency_code)
    quantize_target = Decimal("1") if decimals == 0 else Decimal("0.01")
    return (value * rate_value).quantize(quantize_target, rounding=ROUND_HALF_UP)


def format_currency_amount(amount, currency_code, rate):
    if amount is None or amount == "":
        return ""

    try:
        value = Decimal(str(amount))
    except Exception:
        return ""

    currency_code = (currency_code or DEFAULT_CURRENCY).upper()
    decimals = _get_currency_decimals(currency_code)
    converted = convert_amount(value, currency_code, rate)
    formatted = format(converted, f",.{decimals}f")

    return f"{currency_code} {formatted}"


def format_currency_value(amount, currency_code, rate):
    currency_code = (currency_code or DEFAULT_CURRENCY).upper()
    decimals = _get_currency_decimals(currency_code)
    converted = convert_amount(amount, currency_code, rate)
    return format(converted, f".{decimals}f")


def get_currency_context(request):
    country_code = request.session.get("country_code")

    if "login" in request.session:
        from app1.models import Registration

        user_email = request.session.get("login")
        if user_email:
            try:
                user = Registration.objects.only("country_code").get(email=user_email)
                country_code = user.country_code
                request.session["country_code"] = country_code
            except Registration.DoesNotExist:
                pass

    currency_code = get_currency_for_country_code(country_code)
    currency_rate = get_exchange_rate(currency_code)

    return {
        "currency_code": currency_code,
        "currency_rate": currency_rate,
        "currency_base_code": BASE_CURRENCY,
    }
