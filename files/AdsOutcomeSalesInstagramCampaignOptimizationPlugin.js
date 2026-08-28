__d(
  "AdsOutcomeSalesInstagramCampaignOptimizationPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsInterfacesLogger",
    "AdsLandingPageViewsUtils",
    "AdsMessagesInstagramCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsSmartDefaultPageUtils",
    "CTDAdsOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = babelHelpers.extends(
        {},
        r("AdsMessagesInstagramCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_instagram",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").INSTAGRAM,
          },
          getCanUseConversionWindow: function (t) {
            return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              ? r("qex")._("4250") === !0
              : !1;
          },
          getClickConversionWindowOptions: (e = r(
            "AdsConversionsCampaignOptimizationPlugin",
          )).getClickConversionWindowOptions,
          getViewConversionWindowOptions: e.getViewConversionWindowOptions,
          getEngagedVideoViewWindowOptions: e.getEngagedVideoViewWindowOptions,
          getShouldDefaultToAttributionSpec:
            e.getShouldDefaultToAttributionSpec,
          getDefaultConversionWindowLength: e.getDefaultConversionWindowLength,
          getDefaultViewConversionWindowLength:
            e.getDefaultViewConversionWindowLength,
          getDefaultEngagedVideoViewWindowLength:
            e.getDefaultEngagedVideoViewWindowLength,
          getRecommendedEngagedVideoViewOption:
            e.getRecommendedEngagedVideoViewOption,
          getConversionWindowHelpText: e.getConversionWindowHelpText,
          getSupportedOptimizationGoals: function (t) {
            var e = t.pageID,
              n = e == null ? void 0 : e.getValueForIndex(0),
              a =
                r("gkx")("4720") ||
                o(
                  "CTDAdsOptimizationStoreUtils",
                ).getIsCTDPurchaseOptimizationGoalEligible(n)
                  ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
                  : [];
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
              a,
            );
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account,
              n = t.campaign,
              a = t.campaignGroup,
              i = t.pageID;
            if (n == null || a == null)
              return r("AdsAPIOptimizationGoals").CONVERSATIONS;
            var l = o("AdsAPICampaignRecordUtils").getDestinationType(n),
              s = o("AdsAPICampaignGroupRecordUtils").getObjective(a),
              u = o("AdsSmartDefaultPageUtils").getDefaultPageID(n, e, a),
              c = o(
                "CTXDefaultingStoreUtils",
              ).getDefaultOptimizationGoalByObjectiveAndPageID(
                s,
                l,
                i != null ? i : u,
                null,
              );
            if (c != null) {
              var d,
                m = c[0],
                p = c[1];
              return (
                r("AdsInterfacesLogger").log({
                  eventName: "ctx_optimization_goal_defaulting",
                  data:
                    ((d = {}),
                    (d.caller = "plugin_default_optimization_goal"),
                    (d.campaign_destination_type = l),
                    (d.objective = s),
                    (d.optimization_goal = m),
                    (d.page_id = i != null ? i : u),
                    (d.source = p),
                    (d.campaign_id = n == null ? void 0 : n.id),
                    d),
                }),
                m
              );
            }
            return r("AdsAPIOptimizationGoals").CONVERSATIONS;
          },
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
