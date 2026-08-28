__d(
  "adsCampaignConvertUSDBudgetToCurrency",
  ["AdsDefaultBudget"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        o("AdsDefaultBudget").getDefaultDailyBudget(e) /
        o("AdsDefaultBudget").getDefaultDailyBudget("USD");
      return Math.round(t * n);
    }
    l.default = e;
  },
  98,
);
