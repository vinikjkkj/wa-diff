__d(
  "AdsOutcomeLeadsWhatsAppCampaignOptimizationPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "CTWAAdsOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "CTXMDAdsOptimizationStoreUtils",
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
          key: "outcome_leads_whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.account,
              n = t.destinationType,
              a = t.objective,
              i = t.pageID;
            if (
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)
            ) {
              var l = o(
                "CTXMDAdsOptimizationStoreUtils",
              ).getDefaultOptimizationGoalForCTXMDLeadsDestination(n);
              if (l === r("AdsAPIOptimizationGoals").CONVERSATIONS) return [l];
            }
            if (
              o(
                "CTWAAdsOptimizationStoreUtils",
              ).getIsCTWALeadOptimizationGoalEligible(
                i == null ? void 0 : i.getValueForIndex(0),
                !0,
              )
            ) {
              var s = i == null ? void 0 : i.getValueForIndex(0);
              return (
                o(
                  "ClickToWhatsAppAdsLoggerUtils",
                ).logClickToWhatsAppAdsUnifiedEventDetails(
                  new (r("ClickToWhatsAppAdsDetails"))({
                    event: "ctwa_lead_optimization_client_check",
                    pageID: s,
                    adAccountID: e == null ? void 0 : e.account_id,
                    objective: o(
                      "ClickToWhatsAppAdsLoggerUtils",
                    ).getAdproObjectiveFromApiObjective(a),
                    productFlow: "quick_create_ads_manager",
                  }),
                ),
                [
                  r("AdsAPIOptimizationGoals").LEAD_GENERATION,
                  r("AdsAPIOptimizationGoals").CONVERSATIONS,
                ]
              );
            }
            return [r("AdsAPIOptimizationGoals").CONVERSATIONS];
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account,
              n = t.campaign,
              a = t.campaignGroup,
              i = t.pageID,
              l =
                n != null
                  ? o("AdsAPICampaignRecordUtils").getDestinationType(n)
                  : null;
            if (
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCtxmdLeadsObjectiveEnabled(!1)
            ) {
              var s = o(
                "CTXMDAdsOptimizationStoreUtils",
              ).getDefaultOptimizationGoalForCTXMDLeadsDestination(l);
              if (s === r("AdsAPIOptimizationGoals").CONVERSATIONS) return s;
            }
            if (n && a) {
              var u = o("AdsAPICampaignGroupRecordUtils").getObjective(a),
                c = o(
                  "CTXDefaultingStoreUtils",
                ).getDefaultOptimizationGoalByObjectiveAndPageID(u, l, i, null);
              if (c != null) {
                var d,
                  m = c[0],
                  p = c[1];
                return (
                  o("CTWAAdsOptimizationStoreUtils").logCTWADFODefaultingEvent(
                    i,
                    e,
                    u,
                    m,
                    p,
                  ),
                  r("AdsInterfacesLogger").log({
                    eventName: "ctx_optimization_goal_defaulting",
                    data:
                      ((d = {}),
                      (d.caller = "plugin_default_optimization_goal"),
                      (d.campaign_destination_type = l),
                      (d.objective = u),
                      (d.optimization_goal = m),
                      (d.page_id = i),
                      (d.source = p),
                      (d.campaign_id = n == null ? void 0 : n.id),
                      d),
                  }),
                  m
                );
              }
            }
            return r("AdsAPIOptimizationGoals").CONVERSATIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
