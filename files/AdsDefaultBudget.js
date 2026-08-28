__d(
  "AdsDefaultBudget",
  ["AdsDefaultBudgetConfig.experimental", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("AdsDefaultBudgetConfig.experimental").currencies[e]
        ? r("AdsDefaultBudgetConfig.experimental").currencies[e]
            .default_daily_budget
        : r("AdsDefaultBudgetConfig.experimental").currencies.USD
            .default_daily_budget;
    }
    function s(e) {
      return r("AdsDefaultBudgetConfig.experimental").currencies[e]
        ? r("AdsDefaultBudgetConfig.experimental").currencies[e]
            .default_lifetime_budget
        : r("AdsDefaultBudgetConfig.experimental").currencies.USD
            .default_lifetime_budget;
    }
    ((l.getDefaultDailyBudget = e), (l.getDefaultLifetimeBudget = s));
  },
  34,
);
