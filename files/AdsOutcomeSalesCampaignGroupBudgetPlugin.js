__d(
  "AdsOutcomeSalesCampaignGroupBudgetPlugin",
  ["AdsAPIObjectives", "AdsConversionsCampaignGroupBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignGroupBudgetPlugin"),
        {
          type: "campaign_group/budget",
          key: "outcome_sales",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_SALES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
