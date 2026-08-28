__d(
  "AdsOutcomeEngagementOnAdVideoViewsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountStore",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsGroupUtils",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
    "isSixSecondVideoViewsEnabledForAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_on_ad_video",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").VIDEO,
          },
          getSupportedOptimizationGoals: function () {
            if (
              o(
                "AdsReachFrequencyGKUtils",
              ).isAccountEligibleForPostEngagementEnhancements2025()
            ) {
              var e = o("AdsGroupUtils").isGroupPromotionEligibleForH1(
                r("AdsAccountStore").getSelectedAccount().getValue(),
              );
              return o(
                "AdsOptimizationGoalUtils",
              ).getOnYourAdSupportedOptimizationGoals(e);
            }
            return [r("AdsAPIOptimizationGoals").THRUPLAY].concat(
              r("isSixSecondVideoViewsEnabledForAccount")()
                ? [r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS]
                : [],
              [r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS],
            );
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").THRUPLAY;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
