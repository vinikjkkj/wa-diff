__d(
  "LWICometFormatCurrency",
  ["AdsCurrencyFormatter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e == null
        ? ""
        : n.withSymbol
          ? o("AdsCurrencyFormatter").formatCurrencyFullFormat(
              t,
              e,
              n.withISO,
              n.withNumberDelimiters,
              n.withDecimals,
            )
          : o("AdsCurrencyFormatter").formatCurrencyWithISONoSymbol(t, e);
    }
    l.getLWIFormatCurrency = e;
  },
  98,
);
