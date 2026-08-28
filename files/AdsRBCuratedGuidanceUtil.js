__d(
  "AdsRBCuratedGuidanceUtil",
  ["fbt", "AdsCurrencyFormatter", "Currency"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, r) {
      r === void 0 && (r = !0);
      var e = Math.round(n).toString().length,
        a = n;
      r && (a = n * (o("Currency").getOffset(t) || 100));
      var i = o("AdsCurrencyFormatter").formatCurrencyWithOptionalDecimals(
        t,
        a,
        e <= 2,
      );
      return (
        e >= 4 &&
          (i = o("AdsCurrencyFormatter").formatCurrencyWithLargerNumber(t, a)),
        s._(/*BTDS*/ "{currency}", [s._param("currency", i)])
      );
    };
    l.getFormattedCPRCurrency = e;
  },
  226,
);
