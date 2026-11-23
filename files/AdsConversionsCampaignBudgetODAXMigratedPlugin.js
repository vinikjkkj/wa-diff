__d(
  "AdsConversionsCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsConversionsCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConversionsCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "conversions/ODAX_MIGRATED",
        multiPivots: [
          { objective: r("AdsAPIObjectives").OUTCOME_SALES },
          { objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT },
          { objective: r("AdsAPIObjectives").OUTCOME_LEADS },
        ],
        originalKey: "conversions",
      }),
      s = e;
    l.default = s;
  },
  98,
);
