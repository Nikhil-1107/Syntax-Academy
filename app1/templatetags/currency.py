from django import template

from app1.utils.currency import format_currency_amount
from app1.utils.currency import format_currency_value

register = template.Library()


@register.simple_tag(takes_context=True)
def currency_amount(context, amount):
    currency_code = context.get("currency_code")
    currency_rate = context.get("currency_rate")
    return format_currency_amount(amount, currency_code, currency_rate)


@register.simple_tag(takes_context=True)
def currency_value(context, amount):
    currency_code = context.get("currency_code")
    currency_rate = context.get("currency_rate")
    return format_currency_value(amount, currency_code, currency_rate)
