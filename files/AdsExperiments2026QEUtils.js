__d(
  "AdsExperiments2026QEUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11717");
    }
    function s() {
      return r("qex")._("2596") === !0;
    }
    function u() {
      return r("qex")._("2597") === !0;
    }
    function c() {
      return r("qex")._("2455") === !0;
    }
    function d() {
      return r("gkx")("21488");
    }
    function m() {
      return r("gkx")("22918");
    }
    function p() {
      return r("qex")._("1905") === !0;
    }
    function _() {
      return r("qex")._("2322") === !0;
    }
    function f() {
      return r("gkx")("18798");
    }
    function g() {
      return r("gkx")("18827");
    }
    function h() {
      return r("qex")._("2390") === !0;
    }
    function y() {
      return r("qex")._("2391") === !0;
    }
    function C() {
      return r("gkx")("12576") || r("gkx")("22787");
    }
    function b() {
      return r("gkx")("3935") || r("gkx")("22789");
    }
    function v() {
      var e;
      return (e = r("qex")._("814")) != null ? e : !1;
    }
    ((l.getIsResultsROASEnabled = e),
      (l.getIsEligibilityForLightweightTestMFR = s),
      (l.getIsEligibilityForLightweightTestMFRSilent = u),
      (l.getIsEligibleForMarSciTestRecommendations = c),
      (l.getCanSeeVersionControlTest = d),
      (l.getCanSeeVersionControlTestSilent = m),
      (l.getCanSeeNewHoverCard = p),
      (l.getCanSeeNewHoverCardWithoutLogging = _),
      (l.getIsMixedAttributionTestingSupported = f),
      (l.getIsMixedAttributionTestingSupportedSilent = g),
      (l.getCanSeeTestProgressCard = h),
      (l.getCanSeeTestProgressCardWithoutLogging = y),
      (l.getIsReportMigrationEnabled = C),
      (l.getIsReportMigrationEnabledSilent = b),
      (l.getIsPushDeliveryEnhancementsEnabled = v));
  },
  98,
);
