__d(
  "AdsCampaignOptimizationPluginResolver",
  [
    "AdsCampaignOptimizationPluginType",
    "AdsCampaignOptimizationPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsCampaignOptimizationPlugins").getArray();
      }, o("AdsCampaignOptimizationPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
