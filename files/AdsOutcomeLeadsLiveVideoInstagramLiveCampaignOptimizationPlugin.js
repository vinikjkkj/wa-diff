__d(
  "AdsOutcomeLeadsLiveVideoInstagramLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsLandingPageViewsUtils",
    "AdsLiveVideoConversionCampaignOptimizationPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsLiveVideoConversionCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "outcome_leads/live_video/instagram_live",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
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
