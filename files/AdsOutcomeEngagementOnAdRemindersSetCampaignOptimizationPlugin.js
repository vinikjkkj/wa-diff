__d(
  "AdsOutcomeEngagementOnAdRemindersSetCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountStore",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsGroupUtils",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_on_ad_reminders_set",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").REMINDER,
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.account;
            if (
              o(
                "AdsReachFrequencyGKUtils",
              ).isAccountEligibleForPostEngagementEnhancements2025()
            ) {
              var n = o("AdsGroupUtils").isGroupPromotionEligibleForH1(
                r("AdsAccountStore").getSelectedAccount().getValue(),
              );
              return o(
                "AdsOptimizationGoalUtils",
              ).getOnYourAdSupportedOptimizationGoals(n);
            }
            return [r("AdsAPIOptimizationGoals").REMINDERS_SET];
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account;
            return r("AdsAPIOptimizationGoals").REMINDERS_SET;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
