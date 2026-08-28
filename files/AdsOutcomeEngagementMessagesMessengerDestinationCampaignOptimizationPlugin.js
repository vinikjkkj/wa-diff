__d(
  "AdsOutcomeEngagementMessagesMessengerDestinationCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsOutcomeEngagementMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsOutcomeEngagementMessagesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_messages_messenger_destination",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
            destinationType: r("AdCampaignDestination").MESSENGER,
          },
          getCanUseConversionWindow: function (t) {
            return t ===
              r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
              ? !0
              : t === r("AdsAPIOptimizationGoals").VALUE
                ? !1
                : r(
                    "AdsOutcomeEngagementMessagesCampaignOptimizationPlugin",
                  ).getCanUseConversionWindow(t);
          },
          getClickConversionWindowOptions: function (t, n) {
            switch (t) {
              case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
                return [1, 7];
              default:
                return r(
                  "AdsOutcomeEngagementMessagesCampaignOptimizationPlugin",
                ).getClickConversionWindowOptions(t);
            }
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
