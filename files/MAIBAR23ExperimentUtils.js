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
      if (e) {
        var t;
        ((t = r("qex"))._("3260"),
          t._("5432"),
          t._("5433"),
          t._("6024"),
          t._("6025"));
      } else {
        var t;
        ((t = r("qex"))._("3392"),
          t._("5434"),
          t._("5435"),
          t._("6026"),
          t._("6027"));
      }
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
      var i = a ? r("qex")._("5122") : r("qex")._("5287"),
        l = p(),
        u = l == null ? "null" : l ? "on" : "off";
      return (
        o("MAIBAR23LoggingUtils").logMAIBAR23Exposure(
          "maiba_r23_e2e_universe",
          i,
          a,
          n,
          u,
        ),
        i != null ? i : !1
      );
    }
    function m() {
      (r("qex")._("6028"), r("qex")._("6029"));
    }
    function p() {
      m();
      var e = r("qex")._("5427");
      return (o("MAIBAR23LoggingUtils").logMAIBAR23E2EODAXDefaultOn(e), e);
    }
    function _() {
      var e;
      return (e = p()) != null ? e : !0;
    }
    function f() {
      return r("gkx")("4344");
    }
    function g(e, t) {
      return !t || e == null ? !1 : r("qex")._("1235") != null;
    }
    function h(e) {
      var t,
        n = e.callsite,
        a = e.logExposure;
      if (!o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(n) || !c())
        return !1;
      u(a);
      var i = a ? r("qex")._("5123") : r("qex")._("5288");
      return (
        o("MAIBAR23LoggingUtils").logMAIBAR23Exposure(
          "maiba_r23_copilot_universe",
          i,
          a,
          n,
        ),
        i !== !0 ? !1 : (t = r("qex")._("2706")) != null ? t : !0
      );
    }
    function y() {
      return { boost_post_alpha_qe_eligible: null };
    }
    function C() {
      return {
        maiba_bizm_subagent:
          r("qex")._("5409") === "bizm_subagent_enabled" ? "true" : null,
      };
    }
    function b(e) {
      var t = e.logExposure,
        n = t ? r("qex")._("227") : r("qex")._("732");
      return n != null ? n : !1;
    }
    function v(e) {
      var t = e.logExposure,
        n = t ? r("qex")._("1132") : r("qex")._("1235");
      return n != null ? n : !1;
    }
    ((l.isE2ETest = d),
      (l.doE2EODAXDefaultOnAATest = m),
      (l.isE2EODAXDefaultOn = _),
      (l.isE2EOrganicEligible = f),
      (l.isMAIBAContextChipsEligible = g),
      (l.isCopilotTest = h),
      (l.getBoostPostMBSAlphaQECheckResult = y),
      (l.getBizMSubagentQECheckResult = C),
      (l.isE2EPromptBuilderTest = b),
      (l.isE2EContextChipsTest = v));
  },
  98,
);
