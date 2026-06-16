__d(
  "validateWAWebBizBudget",
  ["fbt", "WAWebBizAdCreationCurrencyUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return d(e);
    }
    var u = { withDecimals: !0, withNumberDelimiters: !0, withSymbol: !0 };
    function c(e, t) {
      return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(e, t, u);
    }
    function d(e) {
      var t = e.budgetValue,
        n = e.currency,
        r = e.minDailyBudget,
        o = e.maxDailyBudget,
        a = e.budgetType,
        i = a === void 0 ? "DAILY_BUDGET" : a,
        l = e.durationInDays,
        s = e.minTotalBudget,
        u = e.runContinuously,
        d = u === void 0 ? !1 : u,
        _ = c(r, n),
        f = c(o, n);
      return d || i === "DAILY_BUDGET"
        ? m(t, r, o, _, f)
        : i === "LIFETIME_BUDGET"
          ? p(t, r, o, s, l, n, f)
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
    l.default = e;
  },
  226,
);
