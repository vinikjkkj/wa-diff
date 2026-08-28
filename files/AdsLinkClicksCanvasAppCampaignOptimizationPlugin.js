__d(
  "AdsLinkClicksCanvasAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLinkClicksAppCampaignOptimizationPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksAppCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "link_clicks/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
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
