__d(
  "AdsOutcomeSalesLiveVideoInstagramLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsLiveVideoConversionCampaignOptimizationPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        r("AdsLiveVideoConversionCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "outcome_sales/live_video/instagram_live",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
            destinationType: r("AdCampaignDestination").INSTAGRAM_LIVE,
          },
          getSupportedOptimizationGoals: function () {
            var e = [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS].concat(
              o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                ? []
                : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
            );
            return (
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).getIsRepliesOptimizationIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").CONVERSATIONS),
              o("AdsCampaignLiveVideoAdsUtils").getIsRoasGoalIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").VALUE),
              o("AdsCampaignLiveVideoAdsUtils").getIsCtdPoGoalIgLvaEnabled() &&
                e.push(
                  r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
                ),
              e
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
