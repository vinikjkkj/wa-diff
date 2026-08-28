__d(
  "AdsOutcomeEngagementOnAdGroupJoinsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLandingPageViewsUtils",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsOptimizationGoalUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement_on_ad_group_joins",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").GROUP,
          },
          getSupportedOptimizationGoals: function () {
            return o(
              "AdsReachFrequencyGKUtils",
            ).isAccountEligibleForPostEngagementEnhancements2025()
              ? o(
                  "AdsOptimizationGoalUtils",
                ).getOnYourAdSupportedOptimizationGoals(!0)
              : o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS]
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS];
          },
          getDefaultOptimizationGoal: function () {
            return o(
              "AdsLandingPageViewsUtils",
            ).shouldUseLPVToVisitsRebranding()
              ? r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
