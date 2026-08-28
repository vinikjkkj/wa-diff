__d(
  "AdsOutcomeEngagementLiveVideoInstagramLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_engagement/live_video/instagram_live",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
            destinationType: r("AdCampaignDestination").INSTAGRAM_LIVE,
          },
          getSupportedOptimizationGoals: function () {
            var e = [
              r("AdsAPIOptimizationGoals").THRUPLAY,
              r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
            ].concat(
              o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
            );
            return (
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).getIsRepliesOptimizationIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").CONVERSATIONS),
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).getIsPostEngagementGoalIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").POST_ENGAGEMENT),
              o("AdsCampaignLiveVideoAdsUtils").getIsRoasGoalIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").VALUE),
              e
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return o(
              "AdsCampaignLiveVideoAdsUtils",
            ).getShouldDefaultOcPurchaseOptimizationGoalIgLva(!0)
              ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              : r("AdsAPIOptimizationGoals").THRUPLAY;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
