__d(
  "AdsStoreVisitsOfflineConversionFeaturesPlugin",
  [
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsDefaultOfflineConversionFeaturesPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultOfflineConversionFeaturesPlugin"),
        {
          type: "offline_conversion_features",
          key: "store_visits",
          pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
          isProductSetAsOfflineConversionSetProxySupported: function (t) {
            return r("AdsAccountUtils").hasCapability(
              t,
              "COLLABORATIVE_ADS_IN_STORE_TRAFFIC_SUPPORT",
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
