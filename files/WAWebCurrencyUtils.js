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
      c = { "pt-BR": "BRL" },
      d = function () {
        var e;
        return [
          (e = r("WAWebL10N")).getFullLocale(),
          e.normalizeLocaleToBcp47Compliant(e.getNormalizedLocale()),
          e.normalizeLocaleToBcp47Compliant(e.getLocale()),
        ].filter(Boolean);
      };
    function m(e) {
      var t = e.amount,
        n = e.currency,
        r = e.localeOverride,
        o = r === void 0 ? d() : r,
        a = e.options,
        i = Array.isArray(o) ? o[0] : o,
        l = "symbol";
      return (
        u.includes(i) && c[i] !== n && (l = "code"),
        new Intl.NumberFormat(
          o,
          babelHelpers.extends(
            { style: "currency", currency: n, currencyDisplay: l },
            a,
          ),
        ).format(t)
      );
    }
    function p(e) {
      var t = e.amount1000,
        n = e.currency,
        r = e.localeOverride,
        o = e.options;
      return m({ amount: t / 1e3, currency: n, localeOverride: r, options: o });
    }
    function _(e) {
      return new Intl.NumberFormat(e).format(1.1).substring(1, 2);
    }
    function f(e) {
      return new Intl.NumberFormat(e).format(1e4).substring(2, 3);
    }
    function g(e, t) {
      var n = p({ amount1000: 0, currency: t, localeOverride: e, options: {} });
      return n.replace(/\d+([,.]\d+)?/g, "").trim();
    }
    function h(e, t) {
      var n = d(),
        r = _(n),
        o = g(n, e),
        a = p({ amount1000: t, currency: e }),
        i = a.replace(o, "").trim(),
        l = i.indexOf(r),
        s = l === -1 ? i : i.substring(0, l),
        u = l === -1 ? "" : i.substring(l);
      return { symbol: o, integer: s, decimal: u };
    }
    function y(t) {
      return g(e[t], t);
    }
    function C(e, t) {
      var n = d(),
        r = g(n, e),
        o = f(n),
        a = _(n);
      return b(t, r, a, o);
    }
    function b(e, t, n, r) {
      var o = e.replace(t, "").trim(),
        a = o.split(r).join(""),
        i = parseFloat(a.replace(n, ".") || "0");
      return Math.round(i * 1e3);
    }
    function v(e, t) {
      if (t == null || t.trim().length === 0) return !1;
      var n = d(),
        r = f(n),
        o = _(n);
      if (t.match("/[^0-9" + r + o + "]/")) return !1;
      var a = g(n, e),
        i = C(e, t),
        l = p({ amount1000: i, currency: e }),
        s = l.replace(a, "").trim(),
        u = s.indexOf(o),
        c = u === -1 ? s : s.substring(0, u),
        m = s.split(r).join("");
      u = m.indexOf(o);
      var h = u === -1 ? m : m.substring(0, u);
      return t === s || t === c || t === m || t === h;
    }
    function S(e, t, n, r) {
      var a = d(),
        i =
          o("WAWebCurrencyData").CURRENCY_DIGITS[e] !== void 0
            ? o("WAWebCurrencyData").CURRENCY_DIGITS[e]
            : o("WAWebCurrencyData").DEFAULT_DIGITS,
        l = C(e, t);
      if ((n != null && l < n) || (r != null && l > r)) return !1;
      var s = t.replace(/\D+$/g, ""),
        u = _(a),
        c = f(a),
        m = g(a, e),
        p = t
          .replace(m, "")
          .trim()
          .replace(/^[-+]/, "")
          .split(c)
          .join("")
          .replace(u, "");
      return !(
        Number.isNaN(l) ||
        s !== t ||
        /\D/.test(p) ||
        (t.split(u)[1] || "").length > i
      );
    }
    function R(e) {
      var t = o("WAWebCurrencyData").REGION_TO_CURRENCY[e.toUpperCase()];
      return (t == null ? void 0 : t.length) > 0
        ? t[0]
        : o("WAWebCurrencyData").DEFAULT_CURRENCY;
    }
    function L(e) {
      return s.has(e);
    }
    ((l.formatAmount = m),
      (l.formatAmount1000 = p),
      (l.formatAmount1000ToParts = h),
      (l.formatLocalSymbol = y),
      (l.valueFromString = C),
      (l.parseValueFromString = b),
      (l.validateAmountString = v),
      (l.validatePriceString = S),
      (l.currencyForCountryShortcode = R),
      (l.isSupportedCurrency = L));
  },
  98,
);
