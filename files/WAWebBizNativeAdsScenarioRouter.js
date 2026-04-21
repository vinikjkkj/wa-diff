__d(
  "WAWebBizNativeAdsScenarioRouter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.fbPageHasCreatedAd,
        n = e.hasValidFBAccessToken,
        r = e.isWAAEligible,
        o = e.waAdsIdentityPageHasCreatedAd,
        a = t || o;
      return !r && a && !n
        ? "HAS_FB_ADS_NOT_WAA_ELIGIBLE"
        : !r && !a
          ? "FIRST_TIME_NOT_WAA_ELIGIBLE"
          : a
            ? t && !n && r && !o
              ? "HAS_FB_ADS_NO_FB_ACCESS_TOKEN"
              : "RETURNING_WITH_ADS"
            : "FIRST_TIME_WAA_ELIGIBLE";
    }
    i.resolveNativeAdsScenario = e;
  },
  66,
);
