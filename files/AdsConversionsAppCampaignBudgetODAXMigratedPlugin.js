__d(
  "AdsConversionsAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "conversions/app/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_LEADS,
              promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_SALES,
              promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
            },
          ],
          originalKey: "conversions/app",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
