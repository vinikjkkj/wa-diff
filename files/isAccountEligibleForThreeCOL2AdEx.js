__d(
  "isAccountEligibleForThreeCOL2AdEx",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "AdsAPIObjectives",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = !0);
      var t = r("gkx")("10159"),
        n = !1;
      return (
        e === !0
          ? (n = r("qex")._("2688") === !0)
          : (n = r("qex")._("2707") === !0),
        n || t
      );
    }
    function s(t) {
      return t !== r("AdsAPIObjectives").OUTCOME_SALES ? !1 : e();
    }
    function u(t) {
      return t !== r("AdsAPIObjectives").OUTCOME_SALES ? !1 : e();
    }
    function c() {
      return r("gkx")("11905");
    }
    function d() {
      return r("gkx")("3434");
    }
    function m(t, n) {
      return t !== r("AdsAPIObjectives").OUTCOME_SALES ? !1 : e(n);
    }
    function p(t) {
      return e(t);
    }
    function _() {
      return e(!1);
    }
    function f() {
      return r("gkx")("6030");
    }
    function g() {
      r("gkx")("26502");
    }
    function h() {
      return o(
        "ARXUsabilityHoldoutUtils",
      ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("3790")
        ? (g(),
          o(
            "AMUsabilityHBTCatchAllUtils",
          ).isAccountInUsabilityH1HBTCatchAllTest())
        : r("gkx")("8319");
    }
    function y() {
      return r("gkx")("3994");
    }
    function C() {
      return r("gkx")("7747");
    }
    function b() {
      return r("gkx")("9857");
    }
    function v() {
      r("gkx")("5817");
    }
    function S() {
      return o(
        "ARXUsabilityHoldoutUtils",
      ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("732")
        ? (v(),
          o(
            "AMUsabilityHBTCatchAllUtils",
          ).isAccountInUsabilityH1HBTCatchAllTest())
        : r("qex")._("2815") === !0;
    }
    function R() {
      return r("gkx")("229");
    }
    ((l.isAccountEligibleForThreeCOL2AdEx = s),
      (l.isAccountEligibleForThreeCOL2AdExGuidance = u),
      (l.isAccountEligibleForWebAndAppDefault = c),
      (l.isAccountL3DaDefaultOffForTesting = d),
      (l.isAccountEligibleForThreeCOGuidanceV2 = m),
      (l.isAccountEligibleForThreeCOGuidanceV2WithoutObjective = p),
      (l.isAccountEligibleForThreeCODefault = _),
      (l.is3coXPacFix = f),
      (l.is3coDogfoodFix = h),
      (l.is3coXPacDuplicationUpsellFix = y),
      (l.is3coSwitchMediaFix = C),
      (l.is3coAdvantagePlusDestinationUiFix = b),
      (l.is3coEnableCarouselFormat = S),
      (l.is3coPcaFlowWithOmniAndPacIssueFix = R));
  },
  98,
);
