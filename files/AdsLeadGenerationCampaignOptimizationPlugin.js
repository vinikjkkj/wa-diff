__d(
  "AdsLeadGenerationCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsIntelligentBlueTip.react",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "isLeadGenNPVOEnabledForAccount",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "lead_generation",
        pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        getTargetCostNUX: function (t) {
          return s.jsx(r("AdsIntelligentBlueTip.react"), {
            contextNodeID: t,
            messageID: "ads_lead_gen_target_cost_nux_tip",
            position: "below",
          });
        },
        getDefaultOptimizationGoal: function (t) {
          var e = t.campaign,
            n = e == null ? void 0 : e.destination_type;
          return n === r("AdCampaignDestination").PHONE_CALL
            ? r("AdsAPIOptimizationGoals").QUALITY_CALL
            : (n === r("AdCampaignDestination").UNDEFINED ||
                  n === r("AdCampaignDestination").ON_AD ||
                  n == null) &&
                o(
                  "AdsOptimizationGoalUtils",
                ).shouldDefaultToQualityLeadOptimizationGoal()
              ? r("AdsAPIOptimizationGoals").QUALITY_LEAD
              : r("AdsAPIOptimizationGoals").LEAD_GENERATION;
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.destinationType,
            n = t.objective,
            a = t.pageID,
            i = t.promotedObjectType,
            l = a == null ? void 0 : a.getValueForIndex(0);
          switch (i) {
            case r("AdsPromotedObjectTypes").PHONE_CALL:
              return [r("AdsAPIOptimizationGoals").QUALITY_CALL];
            case r("AdsPromotedObjectTypes").MESSENGER:
              return (
                o(
                  "CTXUnstructuredLeadsAdsStoreUtils",
                ).enableUnstructuredLeadsOptimization(l, n, e, !0, !0),
                [r("AdsAPIOptimizationGoals").LEAD_GENERATION]
              );
            case r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER:
              return [r("AdsAPIOptimizationGoals").LEAD_GENERATION];
            case r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT:
              return [r("AdsAPIOptimizationGoals").LEAD_GENERATION];
          }
          return [].concat(
            i === r("AdsPromotedObjectTypes").PIXEL &&
              r("isLeadGenNPVOEnabledForAccount")()
              ? [r("AdsAPIOptimizationGoals").VALUE]
              : [],
            [
              r("AdsAPIOptimizationGoals").LEAD_GENERATION,
              r("AdsAPIOptimizationGoals").QUALITY_LEAD,
            ],
          );
        },
        getCanUseAveragePricePacing: function (t, n, o) {
          return !(
            t === r("AdsAPIOptimizationGoals").QUALITY_CALL ||
            t === r("AdsAPIOptimizationGoals").QUALITY_LEAD
          );
        },
      }),
      c = u;
    l.default = c;
  },
  98,
);
