__d(
  "AdsSignalChallengedSalesQEUtils",
  ["QE2Logger", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("4169") === !0 : r("qex")._("4299") === !0
      );
    }
    function s(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("3908") === !0 : r("qex")._("4246") === !0
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("5672") === !0 : r("qex")._("5673") === !0
      );
    }
    function c(e) {
      o("QE2Logger").logExposureForAdAccountIDImmediately(
        "smbao_prevent_am_shell_pixel_creation_univ",
        e,
      );
    }
    function d(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("5831") === !0 : r("qex")._("5832") === !0
      );
    }
    function m(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("qex")._("3471") === !0 : r("qex")._("3472") === !0
      );
    }
    function p() {
      return m(!1);
    }
    function _(e) {
      o("QE2Logger").logExposureForAdAccountIDImmediately(
        "smbao_simplified_pixel_management_ads_manager_universe",
        e,
      );
    }
    ((l.shouldDefaultConversionForInactivePixel = e),
      (l.shouldDefaultOptimizationGoalForShellPixel = s),
      (l.shouldPreventAMShellPixelCreation = u),
      (l.logPreventAMShellPixelCreationExposure = c),
      (l.shouldDefaultOptimizationGoalForNoPixel = d),
      (l.shouldDefaultWebsiteURLFromPixel = m),
      (l.isSimplifiedPixelManagementLayoutEnabled = p),
      (l.logSimplifiedPixelManagementInAMExposure = _));
  },
  98,
);
