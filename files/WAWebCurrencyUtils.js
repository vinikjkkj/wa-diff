__d(
  "WAWebCurrencyUtils",
  ["WAWebCurrencyData", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = { IDR: "in-ID", MXN: "es-MX", INR: "en-IN" },
      s = new Set([
        "DZD",
        "ARS",
        "AUD",
        "BDT",
        "BOB",
        "BRL",
        "GBP",
        "CAD",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CZK",
        "DKK",
        "EGP",
        "EUR",
        "GTQ",
        "HNL",
        "HKD",
        "HUF",
        "ISK",
        "INR",
        "IDR",
        "ILS",
        "JPY",
        "KES",
        "KRW",
        "MOP",
        "MYR",
        "MXN",
        "NZD",
        "NIO",
        "NGN",
        "NOK",
        "PKR",
        "PYG",
        "PEN",
        "PHP",
        "PLN",
        "QAR",
        "RON",
        "RUB",
        "SAR",
        "SGD",
        "ZAR",
        "SEK",
        "CHF",
        "TWD",
        "THB",
        "TRY",
        "AED",
        "USD",
        "UYU",
        "VEF",
        "VND",
      ]),
      u = ["es-ES", "pt-BR"],
      c = function () {
        var e;
        return [
          (e = r("WAWebL10N")).getFullLocale(),
          e.normalizeLocaleToBcp47Compliant(e.getNormalizedLocale()),
          e.normalizeLocaleToBcp47Compliant(e.getLocale()),
        ].filter(Boolean);
      },
      d = function (t, n, r, o) {
        o === void 0 && (o = c());
        var e = "symbol";
        return (
          u.includes(Array.isArray(o) ? o[0] : o) && (e = "code"),
          new Intl.NumberFormat(
            o,
            babelHelpers.extends(
              { style: "currency", currency: t, currencyDisplay: e },
              r,
            ),
          ).format(n)
        );
      },
      m = function (t, n, r, o) {
        return d(t, n / 1e3, r, o);
      };
    function p(e) {
      return new Intl.NumberFormat(e).format(1.1).substring(1, 2);
    }
    function _(e) {
      return new Intl.NumberFormat(e).format(1e4).substring(2, 3);
    }
    function f(e, t) {
      var n = m(t, 0, {}, e);
      return n.replace(/\d+([,.]\d+)?/g, "").trim();
    }
    function g(e, t) {
      var n = c(),
        r = p(n),
        o = f(n, e),
        a = m(e, t),
        i = a.replace(o, "").trim(),
        l = i.indexOf(r),
        s = l === -1 ? i : i.substring(0, l),
        u = l === -1 ? "" : i.substring(l);
      return { symbol: o, integer: s, decimal: u };
    }
    function h(t) {
      return f(e[t], t);
    }
    function y(e, t) {
      var n = c(),
        r = f(n, e),
        o = _(n),
        a = p(n);
      return C(t, r, a, o);
    }
    function C(e, t, n, r) {
      var o = e.replace(t, "").trim(),
        a = o.split(r).join(""),
        i = parseFloat(a.replace(n, ".") || "0");
      return Math.round(i * 1e3);
    }
    function b(e, t) {
      if (t == null || t.trim().length === 0) return !1;
      var n = c(),
        r = _(n),
        o = p(n);
      if (t.match("/[^0-9" + r + o + "]/")) return !1;
      var a = f(n, e),
        i = y(e, t),
        l = m(e, i),
        s = l.replace(a, "").trim(),
        u = s.indexOf(o),
        d = u === -1 ? s : s.substring(0, u),
        g = s.split(r).join("");
      u = g.indexOf(o);
      var h = u === -1 ? g : g.substring(0, u);
      return t === s || t === d || t === g || t === h;
    }
    function v(e, t, n, r) {
      var a = c(),
        i =
          o("WAWebCurrencyData").CURRENCY_DIGITS[e] !== void 0
            ? o("WAWebCurrencyData").CURRENCY_DIGITS[e]
            : o("WAWebCurrencyData").DEFAULT_DIGITS,
        l = y(e, t);
      if ((n != null && l < n) || (r != null && l > r)) return !1;
      var s = t.replace(/\D+$/g, ""),
        u = p(a);
      return !(Number.isNaN(l) || s !== t || (t.split(u)[1] || "").length > i);
    }
    function S(e) {
      var t = o("WAWebCurrencyData").REGION_TO_CURRENCY[e.toUpperCase()];
      return (t == null ? void 0 : t.length) > 0
        ? t[0]
        : o("WAWebCurrencyData").DEFAULT_CURRENCY;
    }
    function R(e) {
      return s.has(e);
    }
    ((l.formatAmount = d),
      (l.formatAmount1000 = m),
      (l.formatAmount1000ToParts = g),
      (l.formatLocalSymbol = h),
      (l.valueFromString = y),
      (l.parseValueFromString = C),
      (l.validateAmountString = b),
      (l.validatePriceString = v),
      (l.currencyForCountryShortcode = S),
      (l.isSupportedCurrency = R));
  },
  98,
);
