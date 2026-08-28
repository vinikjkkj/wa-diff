__d(
  "AdsMgmt2026H1ExperimentUtils",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "AdsAIEntrypointAvailabilityUtils",
    "AdsBudgetPoolGatingUtils",
    "AdsScopeUtils",
    "QE2Logger",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("gkx")("21669");
      return e ? u() : !0;
    }
    function s() {
      var e = r("gkx")("6661");
      return e ? c() : !0;
    }
    function u() {
      var e;
      return r("gkx")("11102") ? !0 : (e = r("qex")._("3367")) != null ? e : !1;
    }
    function c() {
      var e;
      return r("gkx")("8288") ? !0 : (e = r("qex")._("3368")) != null ? e : !1;
    }
    function d() {
      return r("gkx")("22081");
    }
    function m() {
      return r("gkx")("16919");
    }
    function p() {
      return o(
        "ARXUsabilityHoldoutUtils",
      ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("3747")
        ? (_(),
          o(
            "AMUsabilityHBTCatchAllUtils",
          ).isAccountInUsabilityH1HBTCatchAllTest())
        : !0;
    }
    function _() {
      r("gkx")("19423");
    }
    function f() {
      var e;
      return r("gkx")("4753")
        ? !0
        : u()
          ? !1
          : (e = r("qex")._("95")) != null
            ? e
            : !1;
    }
    function g() {
      var e;
      return r("gkx")("25603")
        ? !0
        : u()
          ? !1
          : (e = r("qex")._("2150")) != null
            ? e
            : !1;
    }
    function h() {
      return (
        o(
          "AdsAIEntrypointAvailabilityUtils",
        ).getIsGoldenPathEntrypointAvailable("AD_PREVIEW_CARD") && !0
      );
    }
    function y() {
      var e;
      return u() ? !1 : (e = r("qex")._("2755")) != null ? e : !0;
    }
    function C() {
      var e = r("gkx")("21020");
      if (!e) return !1;
      var t = o("AdsScopeUtils").getSelectedAccountID();
      return t == null
        ? !1
        : (o("QE2Logger").logExposureForAdAccountIDImmediately(
            "am_empty_state_enhancement_universe",
            t,
          ),
          r("qex")._("750") === !0);
    }
    function b() {
      var e, t;
      if (r("gkx")("11102")) return !1;
      var n = (e = r("qex")._("3367")) != null ? e : !1;
      if (n) {
        var o;
        return (o = r("qex")._("4127")) != null ? o : !1;
      }
      var a = (t = r("qex")._("5505")) != null ? t : "variant_a";
      return a === "variant_a";
    }
    function v() {
      var e, t;
      if (r("gkx")("8288")) return !1;
      var n = (e = r("qex")._("3368")) != null ? e : !1;
      if (n) {
        var o;
        return (o = r("qex")._("4142")) != null ? o : !1;
      }
      var a = (t = r("qex")._("5506")) != null ? t : "variant_a";
      return a === "variant_a";
    }
    function S() {
      return r("gkx")("10480");
    }
    function R() {
      var e;
      return S() ? !0 : u() ? !1 : (e = r("qex")._("1608")) != null ? e : !1;
    }
    function L() {
      var e;
      return S() ? !0 : c() ? !1 : (e = r("qex")._("1611")) != null ? e : !1;
    }
    function E() {
      var e;
      return u() ? !1 : (e = r("qex")._("494")) != null ? e : !0;
    }
    function k() {
      return (
        v() &&
        o(
          "AdsBudgetPoolGatingUtils",
        ).getIsAccountInBudgetPoolsCreationWithoutExposure()
      );
    }
    function I() {
      var e;
      return r("gkx")("17967")
        ? !0
        : !r("gkx")("11102") && u()
          ? !1
          : (e = r("qex")._("3402")) != null
            ? e
            : !1;
    }
    function T() {
      var e;
      return r("gkx")("18004")
        ? !0
        : !r("gkx")("8288") && c()
          ? !1
          : (e = r("qex")._("3410")) != null
            ? e
            : !1;
    }
    function D() {
      var e;
      return r("gkx")("696")
        ? !0
        : u()
          ? !1
          : (e = r("qex")._("5465")) != null
            ? e
            : !0;
    }
    function x() {
      var e;
      return r("gkx")("702")
        ? !0
        : c()
          ? !1
          : (e = r("qex")._("5466")) != null
            ? e
            : !0;
    }
    function $() {
      return r("gkx")("22887");
    }
    function P() {
      var e;
      return r("gkx")("17819")
        ? !0
        : u()
          ? !1
          : (e = r("qex")._("3408")) != null
            ? e
            : !1;
    }
    function N() {
      var e;
      return r("gkx")("17820")
        ? !0
        : c()
          ? !1
          : (e = r("qex")._("3652")) != null
            ? e
            : !1;
    }
    function M() {
      return r("gkx")("7390");
    }
    function w() {
      return r("gkx")("24886");
    }
    function A() {
      return r("gkx")("24887");
    }
    function F() {
      var e;
      return (e = r("qex")._("5700")) != null ? e : !0;
    }
    function O() {
      var e;
      return (e = r("qex")._("5701")) != null ? e : !0;
    }
    function B() {
      var e;
      return r("gkx")("19585")
        ? !0
        : u()
          ? !1
          : (e = r("qex")._("1060")) != null
            ? e
            : !1;
    }
    function W() {
      return r("gkx")("24790");
    }
    function q() {
      return r("gkx")("11102") ? !1 : r("gkx")("12295");
    }
    ((l.getIsAccountInCAI2026H1LongTermHoldoutWithHVBCheck = e),
      (l.getIsAccountInCAI2026H1LongTermHoldoutWithHVBCheckWithoutExposure = s),
      (l.getIsAccountInPPSRBreakdown = d),
      (l.getIsAccountInAMInvalidSessionCookieRefresh = m),
      (l.getIsAccountInFullNameTypeahead = p),
      (l.getIsAccountInNORBITSpendViz = f),
      (l.getIsAccountInNORBITSpendSLAWithCreativeTestingOrAnomalyDetection = g),
      (l.getIsAccountInCreativePerformanceInsightsEP = h),
      (l.getIsAccountInNORBITBudgetStrategyFilters = y),
      (l.getIsAccountInEmptyStateEnhancement = C),
      (l.getIsAccountInCAI2026H1Grouping = b),
      (l.getIsAccountInCAI2026H1GroupingWithoutExposure = v),
      (l.getIsAccountInGroupingFastFollow = R),
      (l.getIsAccountInGroupingFastFollowWithoutExposure = L),
      (l.getIsAccountInBudgetUsability = E),
      (l.getIsAccountInBudgetPoolGrouping = k),
      (l.getIsAccountInNORBITCreationReportingParity = I),
      (l.getIsAccountInNORBITCreationReportingParityWithoutExposure = T),
      (l.getIsAccountInBudgetReportingPerfSummary = D),
      (l.getIsAccountInBudgetReportingPerfSummaryWithoutExposure = x),
      (l.getIsAccountInARRemoveSummaryCount = $),
      (l.getIsAccountInNORBITMinMaxAdoption = P),
      (l.getIsAccountInNORBITMinMaxAdoptionWithoutExposure = N),
      (l.getIsAccountInNORBITMinMaxEligibilityBypass = M),
      (l.getIsAccountInReachFrequencyPersonalization = w),
      (l.getIsAccountInReachFrequencyPersonalizationWithoutExposure = A),
      (l.getIsAccountInBreakdownOptInH12026 = F),
      (l.getIsAccountInBreakdownOptInH12026WithoutExposure = O),
      (l.getIsAnalyzeBudgetInsightsEnabled = B),
      (l.getIsAccountInAdsReportingOnComet = W),
      (l.getIsGeoToVegaDataVizGKEnabled = q));
  },
  98,
);
