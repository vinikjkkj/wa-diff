__d(
  "AdsBudgetUsabilityGKUtils",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11238") || r("gkx")("12075");
    }
    function s() {
      return e() || r("gkx")("13042");
    }
    function u(t) {
      return e()
        ? !0
        : t.shouldLogExposure
          ? r("gkx")("13145")
          : r("gkx")("13176");
    }
    function c() {
      return e() || r("gkx")("13485");
    }
    function d() {
      return r("gkx")("4531");
    }
    function m() {
      return r("gkx")("20316") ? r("gkx")("19114") || r("gkx")("23238") : !1;
    }
    function p() {
      return r("qex")._("3781") === !0;
    }
    function _() {
      return r("qex")._("3782") === !0;
    }
    function f() {
      return r("qex")._("3784") === !0;
    }
    function g() {
      return r("qex")._("3791") === !0;
    }
    function h() {
      return o(
        "ARXUsabilityHoldoutUtils",
      ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4311")
        ? (y(),
          o(
            "AMUsabilityHBTCatchAllUtils",
          ).isAccountInUsabilityH1HBTCatchAllTest())
        : r("gkx")("10287");
    }
    function y() {
      r("gkx")("3551");
    }
    function C() {
      return !1;
    }
    ((l.isEligibleForH12025UsabilityMissingTogglePreTest = s),
      (l.isEligibleForH12025UsabilityBudgetSchedulingRenamePreTest = u),
      (l.isEligibleForH12025UsabilityContentChanges = c),
      (l.isEligibleForH12026UsabilityBudgetConsistency = d),
      (l.isEligibleForH22025UsabilityBudgetConsistency = m),
      (l.isEligibleForOptGoalBudgetConsistency = p),
      (l.isEligibleForCBOEnableBudgetConsistency = _),
      (l.isEligibleForAppStoreBudgetConsistency = f),
      (l.isEligibleForCBOToggleBudgetConsistency = g),
      (l.isEligibleForBudgetFlexUsabilityFlow = h),
      (l.isStopDateFixEnabled = C));
  },
  98,
);
