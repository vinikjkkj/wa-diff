__d(
  "formatMAIBACampaignPlanAmount",
  ["AdsCurrencyFormatter", "Currency", "CurrencyConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsCurrencyFormatter").formatCurrencyWithOptionalDecimals(
          t,
          e,
          !0,
        ),
        a = r("Currency").getSymbol(t),
        i =
          t !== "USD" &&
          Object.values(r("CurrencyConfig").adsCurrenciesByCode).some(
            function (e) {
              return e.iso !== t && e.symbol === a;
            },
          );
      return i ? n + " " + t : n;
    }
    l.default = e;
  },
  98,
);
