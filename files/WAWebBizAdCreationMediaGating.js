__d(
  "WAWebBizAdCreationMediaGating",
  ["WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        catalogEnabled: o(
          "WAWebBizNativeAdsGatingUtils",
        ).nativeAdsCatalogMediaSourceEnabled(),
        unifiedStoreEnabled: o(
          "WAWebBizNativeAdsGatingUtils",
        ).nativeAdsUnifiedCreativeMediaStoreEnabled(),
      };
    }
    l.getWAWebBizAdCreationMediaGating = e;
  },
  98,
);
