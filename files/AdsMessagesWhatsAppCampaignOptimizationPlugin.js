__d(
  "AdsMessagesWhatsAppCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "CTWAAdsOptimizationStoreUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTXMDFeatureGating",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "messages/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").MESSAGES,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.account,
              n = t.destinationType,
              a = t.objective,
              i = t.pageID,
              l = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                n,
              );
            if (l) {
              if (
                o(
                  "ClickToMessageCTXMDFeatureGating",
                ).enableTrafficObjectiveReachAndImpressions(!0)
              ) {
                var s;
                return [
                  (s = r("AdsAPIOptimizationGoals")).LINK_CLICKS,
                  s.CONVERSATIONS,
                  s.REACH,
                  s.IMPRESSIONS,
                ];
              }
              return [
                r("AdsAPIOptimizationGoals").LINK_CLICKS,
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
              ];
            }
            if (
              o(
                "ClickToMessageAdoptionPerformanceLongTermHoldout",
              ).isAccountInEpdJurisdiction() ||
              (o(
                "AdsWhatsAppFeatureGating",
              ).isWhatsappDestinationRestrictedToLinkClicks(e) &&
                !l)
            )
              return o(
                "AdsWhatsAppFeatureGating",
              ).isEPDAdvertiserInConversationsExperiment(n)
                ? [
                    r("AdsAPIOptimizationGoals").CONVERSATIONS,
                    r("AdsAPIOptimizationGoals").LINK_CLICKS,
                  ]
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS];
            var u =
                a === r("AdsAPIObjectives").MESSAGES ||
                a === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
              c = i != null ? (i == null ? void 0 : i.getValues()[0]) : null,
              d =
                o("AdsUEditorMessagingDestinationUtils").isWA(n) &&
                u &&
                o(
                  "CTWAAdsOptimizationStoreUtils",
                ).getIsCTWAPurchaseConversionsOptimizationGoalEligible(c, !0)
                  ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
                  : [],
              m =
                u &&
                n === r("AdCampaignDestination").WHATSAPP &&
                o(
                  "CTWAAdsOptimizationStoreUtils",
                ).getIsCTWALeadOptimizationGoalEligible(c, !0);
            m &&
              o(
                "ClickToWhatsAppAdsLoggerUtils",
              ).logClickToWhatsAppAdsUnifiedEventDetails(
                new (r("ClickToWhatsAppAdsDetails"))({
                  event: "ctwa_lead_optimization_client_check",
                  pageID: c,
                  adAccountID: e == null ? void 0 : e.account_id,
                  objective: o(
                    "ClickToWhatsAppAdsLoggerUtils",
                  ).getAdproObjectiveFromApiObjective(a),
                  productFlow: "quick_create_ads_manager",
                }),
              );
            var p = m ? [r("AdsAPIOptimizationGoals").LEAD_GENERATION] : [];
            return [
              r("AdsAPIOptimizationGoals").CONVERSATIONS,
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
            ].concat(d, p);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
