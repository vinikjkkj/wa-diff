__d(
  "AdsBulkEditMenuPluginResolver",
  [
    "AdsAdgroupBulkEditMenuPlugins",
    "AdsCampaignBulkEditMenuPlugins",
    "AdsCampaignGroupBulkEditMenuPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["dialogType"],
      s = r("adsPluginResolverFactory")(function () {
        var e = n("AdsAdgroupBulkEditMenuPlugins").getArray(),
          t = n("AdsCampaignBulkEditMenuPlugins").getArray(),
          r = n("AdsCampaignGroupBulkEditMenuPlugins").getArray();
        return [].concat(e, t, r);
      }, e),
      u = s;
    l.default = u;
  },
  98,
);
