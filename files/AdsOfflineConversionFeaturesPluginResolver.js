__d(
  "AdsOfflineConversionFeaturesPluginResolver",
  [
    "AdsOfflineConversionFeaturesPluginType",
    "AdsOfflineConversionFeaturesPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsOfflineConversionFeaturesPlugins").getArray();
      }, o("AdsOfflineConversionFeaturesPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
