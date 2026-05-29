__d(
  "WAWebBizAdCreationBudgetUtils",
  [
    "TWAWebBizAdCreationSpec",
    "WAWebBizAdCreationContinuousDurationUtils",
    "WAWebBizAdCreationCurrencyUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = Number((n = e.offsetAmount) != null ? n : 0),
        o = e.budgetOptions
          .map(function (e) {
            var t;
            return Number((t = e.offsetAmount) != null ? t : 0);
          })
          .sort(function (e, t) {
            return e - t;
          }),
        a = e.minBudget != null ? Number(e.minBudget) : void 0,
        i = babelHelpers.extends(
          { budget: r, budgetOptions: o, defaultBudget: r },
          a !== void 0 ? { minBudget: a } : {},
        );
      return (
        (t == null ? void 0 : t.setInitialDefault) === !0 &&
          (i.initialDefaultBudget = r),
        i
      );
    }
    function s(e, t, n) {
      var a = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(n);
      if (a === 0) return null;
      var i = o(
          "WAWebBizAdCreationContinuousDurationUtils",
        ).isContinuousDurationActive(t),
        l = i ? e : e * t;
      return { amount: (l / a).toString(), currency: n };
    }
    function u(e, t, n) {
      var a = r("justknobx")._("1286"),
        i = t === o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION;
      return {
        boost_duration_in_days: a && !i ? t : null,
        budget: s(e, t, n),
        daily_budget_payment_amount: a ? s(e, 1, n) : null,
      };
    }
    ((l.createBudgetSpec = e),
      (l.getBudgetForBillingApi = s),
      (l.getBillingInfoQueryArgs = u));
  },
  98,
);
