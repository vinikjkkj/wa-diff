__d(
  "AdsEventResponsesCampaignBudgetODAXMigratedPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsEventResponsesCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsEventResponsesCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "event-responses/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              destinationType: r("AdCampaignDestination").ON_EVENT,
            },
          ],
          originalKey: "event-responses",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
