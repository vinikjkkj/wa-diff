__d(
  "WAWebNativeAdsGatingUtils",
  ["WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() ||
        (e && o("WAWebBizNativeAdsGatingUtils").nativeAdsMvpQE2Enabled())
      );
    }
    function s(e) {
      var t = e.hasAdvertisedViaLWI,
        n = e.isQE2Eligible,
        r = e.logExposure;
      return !!(
        o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() ||
        (n && o("WAWebBizNativeAdsGatingUtils").nativeAdsMvpQE2Enabled()) ||
        (!n &&
          !t &&
          (r
            ? o("WAWebBizNativeAdsGatingUtils").nativeAdsMvpQE1Enabled()
            : o(
                "WAWebBizNativeAdsGatingUtils",
              ).nativeAdsMvpQE1EnabledNoExposure()))
      );
    }
    ((l.isNativeAdsMvpEntrypointEligible = e),
      (l.shouldUseNativeAdsMvpExperience = s));
  },
  98,
);
