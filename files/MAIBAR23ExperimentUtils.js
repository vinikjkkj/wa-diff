__d(
  "MAIBAR23ExperimentUtils",
  [
    "AdsAIUtils",
    "MAIBAR23EligibilityUtils",
    "MAIBAR23LoggingUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e ? r("qex")._("5430") : r("qex")._("5431");
    }
    function s(e) {
      e
        ? (r("qex")._("3260"), r("qex")._("5432"), r("qex")._("5433"))
        : (r("qex")._("3392"), r("qex")._("5434"), r("qex")._("5435"));
    }
    function u(e) {
      e ? r("qex")._("3810") : r("qex")._("3830");
    }
    function c() {
      return !r("MAIBAR23EligibilityUtils").is_trusted_tier ||
        r("MAIBAR23EligibilityUtils").is_sensitive_vertical
        ? !1
        : r("gkx")("19949");
    }
    function d(t) {
      var n = t.callsite,
        a = t.logExposure;
      if ((e(a), (r("gkx")("24618") && r("gkx")("24615")) || r("gkx")("19952")))
        return !0;
      if (!o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(n) || !c())
        return !1;
      s(a);
      var i = a ? r("qex")._("5122") : r("qex")._("5287");
      return (
        o("MAIBAR23LoggingUtils").logMAIBAR23Exposure(
          "maiba_r23_e2e_universe",
          i,
          a,
          n,
        ),
        i != null ? i : !1
      );
    }
    function m() {
      return r("gkx")("9235");
    }
    function p(e) {
      return e ? r("qex")._("1341") : r("qex")._("1402");
    }
    function _() {
      return r("gkx")("4344");
    }
    function f() {
      m() && p(!0);
    }
    function g() {
      return m() ? p(!1) === "simple_create" : !0;
    }
    function h(e) {
      var t = e.callsite,
        n = e.logExposure;
      if (r("gkx")("19983")) return !0;
      if (!o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(t) || !c())
        return !1;
      u(n);
      var a = n ? r("qex")._("5123") : r("qex")._("5288");
      return (
        o("MAIBAR23LoggingUtils").logMAIBAR23Exposure(
          "maiba_r23_copilot_universe",
          a,
          n,
          t,
        ),
        a != null ? a : !1
      );
    }
    function y() {
      return {
        boost_post_alpha_qe_eligible: r("qex")._("4303") === !0 ? "true" : null,
      };
    }
    function C() {
      return {
        maiba_bizm_subagent:
          r("qex")._("5409") === "bizm_subagent_enabled" ? "true" : null,
      };
    }
    ((l.isE2ETest = d),
      (l.isE2EOrganicEligible = _),
      (l.logE2EBetaNestedVariationExposure = f),
      (l.isE2ESimpleCreateVariation = g),
      (l.isCopilotTest = h),
      (l.getBoostPostMBSAlphaQECheckResult = y),
      (l.getBizMSubagentQECheckResult = C));
  },
  98,
);
