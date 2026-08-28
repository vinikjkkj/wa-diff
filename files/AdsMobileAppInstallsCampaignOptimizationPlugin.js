__d(
  "AdsMobileAppInstallsCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsMobileAppCampaignOptimizationPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignOptimizationPlugin"),
        r("AdsMobileAppCampaignOptimizationPluginCommon"),
        {
          type: "campaign/optimization",
          key: "mobile_app_installs",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_INSTALLS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
