__d(
  "AdsPostEngagementCampaignBudgetODAXMigratedPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsPostEngagementCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsPostEngagementCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "post-engagement/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              destinationType: r("AdCampaignDestination").ON_POST,
            },
          ],
          originalKey: "post-engagement",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
