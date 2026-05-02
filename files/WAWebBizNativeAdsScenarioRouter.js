__d(
  "WAWebBizNativeAdsScenarioRouter",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.activeIdentityType,
        n = e.fbPageHasCreatedAd,
        o = e.hasValidFBAccessToken,
        a = e.isWAAEligible,
        i = e.waAdsIdentityPageHasCreatedAd,
        l = n || i;
      return !a && l && !o
        ? "HAS_FB_ADS_NOT_WAA_ELIGIBLE"
        : !a && !l
          ? "FIRST_TIME_NOT_WAA_ELIGIBLE"
          : l
            ? n && !o && a && !i
              ? "HAS_FB_ADS_NO_FB_ACCESS_TOKEN"
              : r("justknobx")._("4441") && n && o && t === "WAA" && !i
                ? "HAS_FB_ADS_WAA_ACTIVE"
                : "RETURNING_WITH_ADS"
            : "FIRST_TIME_WAA_ELIGIBLE";
    }
    l.resolveNativeAdsScenario = e;
  },
  98,
);
