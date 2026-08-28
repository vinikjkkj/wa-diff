__d(
  "AdsAdgroupSpecPathPluginResolver",
  [
    "AdsAdgroupSpecPathPluginType",
    "AdsAdgroupSpecPathPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsAdgroupSpecPathPlugins").getArray();
      }, o("AdsAdgroupSpecPathPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
