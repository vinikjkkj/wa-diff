__d(
  "WAWebBizNativeAdsScenarioRouter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.activeIdentityType,
        n = e.fbPageHasCreatedAd,
        r = e.hasValidFBAccessToken,
        o = e.isWAAEligible,
        a = e.waAdsIdentityPageHasCreatedAd,
        i = n || a;
      return !o && i && !r
        ? "HAS_FB_ADS_NOT_WAA_ELIGIBLE"
        : !o && !i
          ? "FIRST_TIME_NOT_WAA_ELIGIBLE"
          : i
            ? n && !r && o && !a
              ? "HAS_FB_ADS_NO_FB_ACCESS_TOKEN"
              : n && r && t === "WAA" && !a
                ? "HAS_FB_ADS_WAA_ACTIVE"
                : "RETURNING_WITH_ADS"
            : "FIRST_TIME_WAA_ELIGIBLE";
    }
    i.resolveNativeAdsScenario = e;
  },
  66,
);
