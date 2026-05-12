from app1.utils.currency import get_currency_context


def auth_guard(request):
    return {
        "auth_guard_enabled": getattr(request, "auth_guard_enabled", False),
        "auth_guard_login_url": getattr(request, "auth_guard_login_url", ""),
        "auth_guard_status_url": getattr(request, "auth_guard_status_url", ""),
    }


def currency_context(request):
    return get_currency_context(request)
