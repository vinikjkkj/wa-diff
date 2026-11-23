__d(
  "AdsMessagesWhatsAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesWhatsAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesWhatsAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "messages/whatsapp/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
            },
          ],
          originalKey: "messages/whatsapp",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
