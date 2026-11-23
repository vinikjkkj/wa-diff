__d(
  "AdsPageLikesCampaignBudgetODAXMigratedPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsPageLikesCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPageLikesCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "page-likes/ODAX_MIGRATED",
        multiPivots: [
          {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            destinationType: r("AdCampaignDestination").ON_PAGE,
          },
        ],
        originalKey: "page-likes",
      }),
      s = e;
    l.default = s;
  },
  98,
);
