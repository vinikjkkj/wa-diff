__d(
  "adsCampaignConvertLocalBudgetToUSD",
  ["AdsDefaultBudget"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if ((n === void 0 && (n = { budgetMode: "daily" }), e == null))
        return null;
      var r = n,
        a = r.budgetMode,
        i = {
          daily: o("AdsDefaultBudget").getDefaultDailyBudget,
          lifetime: o("AdsDefaultBudget").getDefaultLifetimeBudget,
        },
        l = i[a],
        s = l(e) / l("USD");
      return t / s;
    }
    l.adsCampaignConvertLocalBudgetToUSD = e;
  },
  98,
);
