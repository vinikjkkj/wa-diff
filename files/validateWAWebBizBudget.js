__d(
  "validateWAWebBizBudget",
  ["fbt", "WAWebBizAdCreationCurrencyUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = d(e);
      if (t.length > 0) return t;
      var n = g(e.budgetValue, e.recommendedBudget);
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
        o = e.maxDailyBudget,
        a = e.budgetType,
        i = a === void 0 ? "DAILY_BUDGET" : a,
        l = e.durationInDays,
        s = e.minTotalBudget,
        u = c(o, n);
      return i === "LIFETIME_BUDGET" ? m(t, r, o, s, l, n, u) : [];
    }
    function m(e, t, n, r, o, a, i) {
      return r != null && r > 0 && e < r
        ? [f(r, a)]
        : o != null && o > 0
          ? p(e, t, n, o, a, i)
          : [];
    }
    function p(e, t, n, r, o, a) {
      var i = [],
        l = t * r,
        s = n * r;
      return (e < l && i.push(f(l, o)), e > s && i.push(_(a)), i);
    }
    function _(e) {
      return {
        description: s._(
          /*BTDS*/ "Your budget needs to be less than {max_budget}.",
          [s._param("max_budget", e)],
        ),
        severity: "ERROR",
      };
    }
    function f(e, t) {
      return {
        description: s._(
          /*BTDS*/ "The minimum budget for this ad is {min_budget}.",
          [s._param("min_budget", c(e, t))],
        ),
        severity: "ERROR",
      };
    }
    function g(e, t) {
      return t == null || t <= 0 ? null : e >= t ? h() : null;
    }
    function h() {
      return {
        description: s._(/*BTDS*/ "Your budget is in the recommended range."),
        noticeName: "WAWebBizBudgetInRange",
        severity: "ACTIVE_FEEDBACK",
      };
    }
    l.default = e;
  },
  226,
);
