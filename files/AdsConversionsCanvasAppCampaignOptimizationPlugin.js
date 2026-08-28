__d(
  "AdsConversionsCanvasAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsAppCampaignOptimizationPluginCommon",
    "AdsConversionsCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsCampaignOptimizationPlugin"),
        r("AdsConversionsAppCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "conversions/canvas_app",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
