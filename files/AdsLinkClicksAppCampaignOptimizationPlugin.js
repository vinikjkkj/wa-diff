__d(
  "AdsLinkClicksAppCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
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
          key: "link_clicks/app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
