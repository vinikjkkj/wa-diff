__d(
  "WAWebNativeAdsGatingUtils",
  ["WAWebBizGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("WAWebBizGatingUtils").nativeAdsDogfoodEnabled() ||
        (e && o("WAWebBizGatingUtils").nativeAdsMvpQE2Enabled())
      );
    }
    function s(e) {
      var t = e.hasAdvertisedViaLWI,
        n = e.isQE2Eligible,
        r = e.logExposure;
      return !!(
        o("WAWebBizGatingUtils").nativeAdsDogfoodEnabled() ||
        (n && o("WAWebBizGatingUtils").nativeAdsMvpQE2Enabled()) ||
        (!n &&
          !t &&
          (r
            ? o("WAWebBizGatingUtils").nativeAdsMvpQE1Enabled()
            : o("WAWebBizGatingUtils").nativeAdsMvpQE1EnabledNoExposure()))
      );
    }
    ((l.isNativeAdsMvpEntrypointEligible = e),
      (l.shouldUseNativeAdsMvpExperience = s));
  },
  98,
);
