__d(
  "AdsOfflineConversionFeaturesPlugins",
  [
    "AdsDefaultOfflineConversionFeaturesPlugin",
    "AdsStoreVisitsOfflineConversionFeaturesPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsDefaultOfflineConversionFeaturesPlugin"),
        n("AdsStoreVisitsOfflineConversionFeaturesPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
