__d(
  "AdsCampaignGroupBudgetPluginResolver",
  [
    "AdsCampaignGroupBudgetPluginType",
    "AdsCampaignGroupBudgetPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsCampaignGroupBudgetPlugins").getArray();
      }, o("AdsCampaignGroupBudgetPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
