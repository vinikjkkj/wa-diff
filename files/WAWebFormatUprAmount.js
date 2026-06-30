__d(
  "WAWebFormatUprAmount",
  ["WAWebCurrencyUtils", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return [
        (e = r("WAWebL10N")).getFullLocale(),
        e.normalizeLocaleToBcp47Compliant(e.getNormalizedLocale()),
        e.normalizeLocaleToBcp47Compliant(e.getLocale()),
        "es-MX",
      ].filter(Boolean);
    }
    function s(t) {
      var n = new Intl.NumberFormat(e(), {
        style: "currency",
        currency: "MXN",
        currencyDisplay: "narrowSymbol",
      }).format(t);
      return n + " MXN";
    }
    var u = new Map([["MXN", s]]);
    function c(e, t) {
      var n = u.get(e);
      return n != null
        ? n(t)
        : o("WAWebCurrencyUtils").formatAmount({ amount: t, currency: e });
    }
    function d(e, t) {
      return c(e, t / 1e3);
    }
    ((l.formatUprAmount = c), (l.formatUprAmount1000 = d));
  },
  98,
);
