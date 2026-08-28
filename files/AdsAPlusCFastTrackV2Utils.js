__d(
  "AdsAPlusCFastTrackV2Utils",
  ["AdsSensitiveVerticalUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e ? r("gkx")("12362") : r("gkx")("12363");
    }
    function s() {
      return r("gkx")("18207");
    }
    function u() {
      return r("gkx")("13968");
    }
    function c() {
      return r("gkx")("6841");
    }
    function d() {
      return r("gkx")("14210");
    }
    function m(e) {
      return e == null ? !1 : e.includes("SBG");
    }
    function p(e) {
      return e == null ? !1 : e.includes("GBG Unmanaged");
    }
    function _(e) {
      return e == null ? !1 : e.includes("GBG Scaled");
    }
    function f(e) {
      return e == null ? !1 : e.includes("GBG In-Market");
    }
    function g() {
      return r("gkx")("4835");
    }
    function h() {
      return (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountGSIVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountOnDefaultOnBlocklist() ||
        o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist()
      );
    }
    function y() {
      return (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountGSIVertical()
      );
    }
    function C() {
      return u();
    }
    function b() {
      return r("gkx")("15398");
    }
    function v() {
      return y() || u();
    }
    function S() {
      return y() || c();
    }
    ((l.passTextOptimizationsFastTrackV2GK = e),
      (l.passTextTranslationsFastTrackV2GK = s),
      (l.isAccountEligbleForTextOptimizationsFastTrackV2 = d),
      (l.isSBGSegment = m),
      (l.isGBGUnmanagedSegment = p),
      (l.isGBGScaleSegment = _),
      (l.isGBGInMarketSegment = f),
      (l.isAdAccountOnPEDACarouselBlocklist = g),
      (l.isAccountSensitiveForFastTrackV2 = h),
      (l.isAccountInSensitiveVerticals = y),
      (l.isAccountOnEnhanceCTAFastTrackV2Blocklist = C),
      (l.passEnhanceCTAFullFastTrackGK = b),
      (l.isAdAccountSensitiveForInfoLabelGlobalish = v),
      (l.isAdAccountSensitiveForHidePriceGlobalish = S));
  },
  98,
);
