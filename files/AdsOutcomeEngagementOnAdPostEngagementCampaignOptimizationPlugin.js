__d(
  "AdsOutcomeEngagementOnAdPostEngagementCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountStore",
    "AdsGroupUtils",
    "AdsOptimizationGoalUtils",
    "AdsPostEngagementCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsPostEngagementCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_on_ad_post_engagement",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").POST,
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
            return [
              r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
              r("AdsAPIOptimizationGoals").IMPRESSIONS,
              r("AdsAPIOptimizationGoals").REACH,
            ];
          },
          getDefaultOptimizationGoal: function () {
            return r("AdsAPIOptimizationGoals").POST_ENGAGEMENT;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
