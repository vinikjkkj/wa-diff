__d(
  "AdsOutcomeSalesWhatsAppCampaignOptimizationPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsConversionsWhatsAppCampaignOptimizationPlugin",
    "AdsInterfacesLogger",
    "AdsLandingPageViewsUtils",
    "AdsPromotedObjectTypes",
    "AdsSmartDefaultPageUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "CTWAAdsOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWhatsAppCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
          getSupportedOptimizationGoals: function (t) {
            var e,
              n,
              a = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                t.destinationType,
              ),
              i =
                t.pageID != null
                  ? o("AdsCFFindEligiblePageStoreUtils").getPage(
                      (e = t.pageID) == null ? void 0 : e.getValues()[0],
                    )
                  : null;
            if (a)
              return [
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              ].concat(
                o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                  ? []
                  : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                [
                  r("AdsAPIOptimizationGoals").REACH,
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                ],
              );
            var l = t.objective === r("AdsAPIObjectives").OUTCOME_SALES,
              s =
                o("AdsUEditorMessagingDestinationUtils").isWA(
                  t.destinationType,
                ) &&
                l &&
                o(
                  "CTWAAdsOptimizationStoreUtils",
                ).getIsCTWAPurchaseConversionsOptimizationGoalEligible(
                  i == null ? void 0 : i.id,
                  !0,
                )
                  ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
                  : [],
              u =
                ((n = t.enableConversationsOptimizationForWhatsApp) != null
                  ? n
                  : !1) &&
                (i == null ? void 0 : i.has_whatsapp_business_number) === !0;
            return [].concat(
              u ? [r("AdsAPIOptimizationGoals").CONVERSATIONS] : [],
              [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS],
              o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
              [
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
                r("AdsAPIOptimizationGoals").REACH,
              ],
              s,
            );
          },
          getDefaultOptimizationGoal: function (t) {
            var e,
              n,
              a = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                (e = t.campaign) == null ? void 0 : e.destination_type,
              ),
              i =
                (n = t.campaign) == null || (n = n.promoted_object) == null
                  ? void 0
                  : n.page_id,
              l =
                i != null
                  ? o("AdsCFFindEligiblePageStoreUtils").getPage(i)
                  : null,
              s = t.account,
              u = t.campaign,
              c = t.campaignGroup,
              d = t.pageID;
            if (u && c) {
              var m = o("AdsSmartDefaultPageUtils").getDefaultPageID(u, s, c),
                p = o("AdsAPICampaignRecordUtils").getDestinationType(u),
                _ = o("AdsAPICampaignGroupRecordUtils").getObjective(c),
                f = o(
                  "CTXDefaultingStoreUtils",
                ).getDefaultOptimizationGoalByObjectiveAndPageID(
                  _,
                  p,
                  d != null ? d : m,
                  null,
                );
              if (f != null) {
                var g,
                  h = f[0],
                  y = f[1];
                return (
                  o("CTWAAdsOptimizationStoreUtils").logCTWADFODefaultingEvent(
                    d,
                    s,
                    _,
                    h,
                    y,
                  ),
                  r("AdsInterfacesLogger").log({
                    eventName: "ctx_optimization_goal_defaulting",
                    data:
                      ((g = {}),
                      (g.caller = "plugin_default_optimization_goal"),
                      (g.campaign_destination_type = p),
                      (g.objective = _),
                      (g.optimization_goal = h),
                      (g.page_id = d != null ? d : m),
                      (g.source = y),
                      (g.campaign_id = u == null ? void 0 : u.id),
                      g),
                  }),
                  h
                );
              }
            }
            return a ||
              ((l == null ? void 0 : l.has_whatsapp_business_number) === !0 &&
                o(
                  "AdsWhatsAppFeatureGating",
                ).shouldSalesObjectiveWhatsAppDefaultConversations())
              ? r("AdsAPIOptimizationGoals").CONVERSATIONS
              : i != null
                ? o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                  ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
                  : r("AdsAPIOptimizationGoals").LINK_CLICKS
                : r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
