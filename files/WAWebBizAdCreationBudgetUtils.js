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
    function e(e) {
      if (e == null) return null;
      var t = Number(e);
      return Number.isFinite(t) && t > 0 ? t : null;
    }
    function s(e, t, n) {
      return Math.min(Math.max(e, t != null ? t : 0), n != null ? n : 1 / 0);
    }
    function u(e, t) {
      var n,
        r,
        o = Number((n = e.offsetAmount) != null ? n : 0),
        a = e.budgetOptions
          .map(function (e) {
            var t;
            return Number((t = e.offsetAmount) != null ? t : 0);
          })
          .sort(function (e, t) {
            return e - t;
          }),
        i = e.minBudget != null ? Number(e.minBudget) : void 0,
        l = e.maxBudget != null ? Number(e.maxBudget) : void 0,
        s = (r = e.recommendation) != null ? r : null,
        u = i !== void 0 ? { minBudget: i } : {},
        c = l !== void 0 ? { maxBudget: l } : {},
        d = babelHelpers.extends(
          { budget: o, budgetOptions: a, defaultBudget: o },
          u,
          c,
        );
      return (
        s != null && (d.recommendedBudget = s),
        (t == null ? void 0 : t.setInitialDefault) === !0 &&
          (d.initialDefaultBudget = o),
        d
      );
    }
    function c(e, t, n) {
      var a = r("WAWebBizAdCreationCurrencyUtils").getCurrencyOffset(n);
      if (a === 0) return null;
      var i = o(
          "WAWebBizAdCreationContinuousDurationUtils",
        ).isContinuousDurationActive(t),
        l = i ? e : e * t;
      return { amount: (l / a).toString(), currency: n };
    }
    function d(e, t, n) {
      var a = r("justknobx")._("1286"),
        i = t === o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION;
      return {
        boost_duration_in_days: a && !i ? t : null,
        budget: c(e, t, n),
        daily_budget_payment_amount: a ? c(e, 1, n) : null,
      };
    }
    ((l.parseValidRecommendation = e),
      (l.clampBudget = s),
      (l.createBudgetSpec = u),
      (l.getBudgetForBillingApi = c),
      (l.getBillingInfoQueryArgs = d));
  },
  98,
);
