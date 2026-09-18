__d(
  "WAWebBizNativeAdsBoostLanding",
  ["WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "FIRST_TIME_WAA_ELIGIBLE"
        ? !0
        : e === "RETURNING_WITH_ADS" &&
            t != null &&
            o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled();
    }
    l.shouldBoostOpenAdCreation = e;
  },
  98,
);
