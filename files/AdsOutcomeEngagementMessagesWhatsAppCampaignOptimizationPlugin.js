__d(
  "AdsOutcomeEngagementMessagesWhatsAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesWhatsAppCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesWhatsAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_messages_whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
