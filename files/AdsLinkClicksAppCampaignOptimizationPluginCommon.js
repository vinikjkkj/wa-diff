__d(
  "AdsLinkClicksAppCampaignOptimizationPluginCommon",
  [
    "AdsAPIOptimizationGoals",
    "AdsAppCampaignOptimizationPluginCommon",
    "AdsAppUrlUtils",
    "AdsDefaultCampaignOptimizationPlugin",
    "AppAndWebLPVUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsAppCampaignOptimizationPluginCommon"),
        {
          getSupportedOptimizationGoals: function (t) {
            var e = t.objectStoreURL;
            return r("AdsAppUrlUtils").isCanvasLink(e)
              ? [
                  r("AdsAPIOptimizationGoals").ENGAGED_USERS,
                  r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
                  r("AdsAPIOptimizationGoals").REACH,
                ]
              : o("AppAndWebLPVUtils").shouldUseAppLpv()
                ? [
                    r("AdsAPIOptimizationGoals").LINK_CLICKS,
                    r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
                    r("AdsAPIOptimizationGoals").REACH,
                  ]
                : [
                    r("AdsAPIOptimizationGoals").LINK_CLICKS,
                    r("AdsAPIOptimizationGoals").REACH,
                  ];
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").LINK_CLICKS;
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
