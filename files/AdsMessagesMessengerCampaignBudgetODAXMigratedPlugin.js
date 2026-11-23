__d(
  "AdsMessagesMessengerCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesMessengerCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesMessengerCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "messages/messenger/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
            },
            {
              objective: r("AdsAPIObjectives").OUTCOME_LEADS,
              promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
            },
          ],
          originalKey: "messages/messenger",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
