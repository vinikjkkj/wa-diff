__d(
  "AdsConversionsWhatsAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "conversions/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.enableConversationsOptimizationForWhatsApp,
              n = t.pageID,
              a =
                n != null
                  ? o("AdsCFFindEligiblePageStoreUtils").getPage(
                      n == null ? void 0 : n.getValues()[0],
                    )
                  : null;
            return [].concat(
              e != null &&
                e &&
                (a == null ? void 0 : a.has_whatsapp_business_number) === !0
                ? [r("AdsAPIOptimizationGoals").CONVERSATIONS]
                : [],
              [
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                r("AdsAPIOptimizationGoals").LINK_CLICKS,
                r("AdsAPIOptimizationGoals").REACH,
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
              ],
            );
          },
          getDefaultOptimizationGoal: function (t) {
            var e,
              n =
                (e = t.campaign) == null || (e = e.promoted_object) == null
                  ? void 0
                  : e.page_id,
              a =
                n != null
                  ? o("AdsCFFindEligiblePageStoreUtils").getPage(n)
                  : null;
            return (a == null ? void 0 : a.has_whatsapp_business_number) ===
              !0 &&
              o(
                "AdsWhatsAppFeatureGating",
              ).shouldSalesObjectiveWhatsAppDefaultConversations()
              ? r("AdsAPIOptimizationGoals").CONVERSATIONS
              : n != null
                ? r("AdsAPIOptimizationGoals").LINK_CLICKS
                : r(
                    "AdsConversionsCampaignOptimizationPlugin",
                  ).getDefaultOptimizationGoal(t);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
