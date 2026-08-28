__d(
  "AdsSalesLiveVideoFacebookLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsLiveVideoFacebookLiveCampaignOptimizationPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        r("AdsLiveVideoFacebookLiveCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "sales/live_video/facebook_live",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
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
