__d(
  "AdsMessagesInstagramCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesInstagramCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesInstagramCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "messages/instagram/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
            },
          ],
          originalKey: "messages/instagram",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
