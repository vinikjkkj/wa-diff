__d(
  "AdsLeadGenerationCampaignBudgetODAXMigratedPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsLeadGenerationCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLeadGenerationCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "lead-generation/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_LEADS,
              destinationType: r("AdCampaignDestination").ON_AD,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_LEADS,
              destinationType: r("AdCampaignDestination").PHONE_CALL,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_LEADS,
              destinationType: r("AdCampaignDestination").MESSENGER,
            },
          ],
          originalKey: "lead-generation",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
