__d(
  "AdsEngagementLiveVideoFacebookLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsLiveVideoFacebookLiveCampaignOptimizationPluginCommon",
    "AdsMessagesCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesCampaignOptimizationPlugin"),
        r("AdsLiveVideoFacebookLiveCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "engagement/live_video/facebook_live",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
            destinationType: r("AdCampaignDestination").FACEBOOK_LIVE,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
