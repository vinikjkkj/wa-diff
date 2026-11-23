__d(
  "AdsAPlusCFastTrackV2Utils",
  ["AdsSensitiveVerticalUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e ? r("gkx")("12362") : r("gkx")("12363");
    }
    function s() {
      return r("gkx")("13968");
    }
    function u() {
      return r("gkx")("6841");
    }
    function c() {
      return r("gkx")("14210");
    }
    function d(e) {
      return e == null ? !1 : e.includes("SBG");
    }
    function m(e) {
      return e == null ? !1 : e.includes("GBG Unmanaged");
    }
    function p(e) {
      return e == null ? !1 : e.includes("GBG Scaled");
    }
    function _(e) {
      return e == null ? !1 : e.includes("GBG In-Market");
    }
    function f() {
      return r("gkx")("4835");
    }
    function g() {
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
    function h() {
      return (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountGSIVertical()
      );
    }
    function y() {
      return s();
    }
    function C() {
      return h() || s();
    }
    function b() {
      return h() || u();
    }
    ((l.passTextOptimizationsFastTrackV2GK = e),
      (l.isAccountEligbleForTextOptimizationsFastTrackV2 = c),
      (l.isSBGSegment = d),
      (l.isGBGUnmanagedSegment = m),
      (l.isGBGScaleSegment = p),
      (l.isGBGInMarketSegment = _),
      (l.isAdAccountOnPEDACarouselBlocklist = f),
      (l.isAccountSensitiveForFastTrackV2 = g),
      (l.isAccountInSensitiveVerticals = h),
      (l.isAccountOnEnhanceCTAFastTrackV2Blocklist = y),
      (l.isAdAccountSensitiveForInfoLabelGlobalish = C),
      (l.isAdAccountSensitiveForHidePriceGlobalish = b));
  },
  98,
);
