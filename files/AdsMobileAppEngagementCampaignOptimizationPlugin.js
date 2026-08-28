__d(
  "AdsMobileAppEngagementCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppCampaignOptimizationPluginCommon",
    "AdsDefaultCampaignOptimizationPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsAppCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "mobile_app_engagement",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT },
          getSupportedOptimizationGoals: function (t) {
            var e = t.disableVideoOptimization;
            return [
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              r("AdsAPIOptimizationGoals").REACH,
            ].concat(
              e === !0 ? [] : [r("AdsAPIOptimizationGoals").VIDEO_VIEWS],
            );
          },
          getDefaultOptimizationGoal: function (t) {
            return t.hasAdvertisableAppEvents === !0
              ? r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
              : r("AdsAPIOptimizationGoals").LINK_CLICKS;
          },
          getCanHaveCustomEventType: function () {
            return !1;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
