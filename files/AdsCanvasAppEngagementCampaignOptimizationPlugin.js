__d(
  "AdsCanvasAppEngagementCampaignOptimizationPlugin",
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
          key: "canvas_app_engagement",
          pivots: { objective: r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT },
          getSupportedOptimizationGoals: function () {
            return [
              r("AdsAPIOptimizationGoals").ENGAGED_USERS,
              r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
              r("AdsAPIOptimizationGoals").REACH,
            ];
          },
          getDefaultOptimizationGoal: function (t) {
            return r("AdsAPIOptimizationGoals").ENGAGED_USERS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
