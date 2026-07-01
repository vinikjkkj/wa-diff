__d(
  "validateWAWebBizBudget",
  ["fbt", "WAWebBizAdCreationCurrencyUtils", "WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = d(e);
      if (t.length > 0) return t;
      var n = y(e.budgetValue, e.recommendedBudget);
      return n != null ? [n] : [];
    }
    var u = { withDecimals: !0, withNumberDelimiters: !0, withSymbol: !0 };
    function c(e, t) {
      return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(e, t, u);
    }
    function d(e) {
      var t = e.budgetValue,
        n = e.currency,
        r = e.minDailyBudget,
        a = e.maxDailyBudget,
        i = e.budgetType,
        l = i === void 0 ? "DAILY_BUDGET" : i,
        s = e.durationInDays,
        u = e.minTotalBudget,
        d = e.runContinuously,
        _ = d === void 0 ? !1 : d,
        f = c(r, n),
        g = c(a, n);
      return !o("WAWebBizNativeAdsGatingUtils").minMaxBudgetFixesEnabled() &&
        (_ || l === "DAILY_BUDGET")
        ? m(t, r, a, f, g)
        : l === "LIFETIME_BUDGET"
          ? p(t, r, a, u, s, n, g)
          : [];
    }
    function m(e, t, n, r, o) {
      var a = [];
      return (e < t && a.push(f(r)), e > n && a.push(g(o)), a);
    }
    function p(e, t, n, r, o, a, i) {
      return r != null && r > 0 && e < r
        ? [h(r, a)]
        : o != null && o > 0
          ? _(e, t, n, o, a, i)
          : [];
    }
    function _(e, t, n, r, o, a) {
      var i = [],
        l = t * r,
        s = n * r;
      return (e < l && i.push(h(l, o)), e > s && i.push(g(a)), i);
    }
    function f(e) {
      return {
        severity: "ERROR",
        title: s._(/*BTDS*/ "The minimum budget is {min_budget} per day.", [
          s._param("min_budget", e),
        ]),
      };
    }
    function g(e) {
      return {
        severity: "ERROR",
        title: s._(/*BTDS*/ "Your budget needs to be less than {max_budget}.", [
          s._param("max_budget", e),
        ]),
      };
    }
    function h(e, t) {
      return {
        severity: "ERROR",
        title: s._(/*BTDS*/ "The minimum budget for this ad is {min_budget}.", [
          s._param("min_budget", c(e, t)),
        ]),
      };
    }
    function y(e, t) {
      return t == null || t <= 0 ? null : e >= t ? C() : null;
    }
    function C() {
      return {
        noticeName: "WAWebBizBudgetInRange",
        severity: "ACTIVE_FEEDBACK",
        title: s._(/*BTDS*/ "Your budget is in the recommended range."),
      };
    }
    l.default = e;
  },
  226,
);
