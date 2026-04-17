__d(
  "WAWebBizAdCreationBudgetUtils",
  [],
  function (t, n, r, o, a, i) {
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
    i.createBudgetSpec = e;
  },
  66,
);
