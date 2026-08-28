__d(
  "AdsBudgetStrategyBundleDUGKUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return u() ? !0 : (e = r("qex")._("2523")) != null ? e : !1;
    }
    function s() {
      var e;
      return u() ? !0 : (e = r("qex")._("2555")) != null ? e : !1;
    }
    function u() {
      return r("gkx")("16657");
    }
    function c(t) {
      return e() ? t.has("adset_budget_sharing") : !1;
    }
    ((l.isEligibleForBudgetStrategyBundleDUWithoutExposureLogging = e),
      (l.isEligibleForBudgetStrategyBundleDU = s),
      (l.shouldHideStandaloneBudgetSolution = c));
  },
  98,
);
