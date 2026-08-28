__d(
  "AdsLinkClicksLiveVideoInstagramLiveCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsLinkClicksCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "link_clicks/live_video/instagram_live",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").LIVE_VIDEO,
            destinationType: r("AdCampaignDestination").INSTAGRAM_LIVE,
          },
          getSupportedOptimizationGoals: function () {
            var e = [r("AdsAPIOptimizationGoals").LINK_CLICKS];
            return (
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).getIsRepliesOptimizationIgLvaEnabled() &&
                e.push(r("AdsAPIOptimizationGoals").CONVERSATIONS),
              e
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").LINK_CLICKS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
