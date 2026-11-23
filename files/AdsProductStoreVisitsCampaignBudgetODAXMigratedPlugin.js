__d(
  "AdsProductStoreVisitsCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsProductStoreVisitsCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsProductStoreVisitsCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "store-visits/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_AWARENESS,
              optimizationGoal: r("AdsAPIOptimizationGoals").REACH,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_AWARENESS,
              optimizationGoal: r("AdsAPIOptimizationGoals").STORE_VISITS,
            },
          ],
          originalKey: "store-visits",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
