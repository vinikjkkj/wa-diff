__d(
  "AdsOutcomeAwarenessCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsFrequencyControlEditorUtils",
    "AdsODAXUtils",
    "AdsVideoViewsCampaignOptimizationPlugin",
    "isSixSecondVideoViewsEnabledForAccount",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 218,
      c = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "outcome_awareness",
        pivots: { objective: r("AdsAPIObjectives").OUTCOME_AWARENESS },
        getDefaultBidAmount: function (t, n) {
          return o(
            "AdsODAXUtils",
          ).AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS.includes(t)
            ? r("AdsVideoViewsCampaignOptimizationPlugin").getDefaultBidAmount(
                t,
                n,
              )
            : t === r("AdsAPIOptimizationGoals").IMPRESSIONS ||
                t === r("AdsAPIOptimizationGoals").REACH
              ? u
              : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                  t,
                  n,
                );
        },
        getBidControlType: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").AD_RECALL_LIFT
            ? r("AdsBidControlType").AUTO_BID_ONLY
            : r("AdsBidControlType").ANY;
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").REACH;
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.isDigitalCircularGuidedCreationFlow,
            n = t.isFullFunnelBeta;
          return e === !0
            ? [
                r("AdsAPIOptimizationGoals").IMPRESSIONS,
                r("AdsAPIOptimizationGoals").REACH,
              ]
            : n === !0
              ? [
                  r("AdsAPIOptimizationGoals").REACH,
                  r("AdsAPIOptimizationGoals").THRUPLAY,
                ]
              : [
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                  r("AdsAPIOptimizationGoals").REACH,
                  r("AdsAPIOptimizationGoals").AD_RECALL_LIFT,
                  r("AdsAPIOptimizationGoals").THRUPLAY,
                ].concat(
                  r("isSixSecondVideoViewsEnabledForAccount")()
                    ? [r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS]
                    : [],
                  [
                    r("AdsAPIOptimizationGoals")
                      .TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
                  ],
                );
        },
        getDefaultFrequencyControlSpecs: function (t, n, a, i) {
          return t != null
            ? o(
                "AdsFrequencyControlEditorUtils",
              ).computeDefaultFrequencyControlSpecs(
                r("AdsAPIObjectives").OUTCOME_AWARENESS,
                t,
                n,
                a,
                i,
              )
            : null;
        },
        getOptimizationGoalWarning: function (t) {
          if (
            o("AdsODAXUtils").AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS.includes(
              t,
            )
          ) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1;
              a < e;
              a++
            )
              n[a - 1] = arguments[a];
            return r(
              "AdsVideoViewsCampaignOptimizationPlugin",
            ).getOptimizationGoalWarning.apply(
              r("AdsVideoViewsCampaignOptimizationPlugin"),
              [t].concat(n),
            );
          }
          return null;
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
