__d(
  "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
  ["AdsSABRBudgetDefaultUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      if (r === !0) {
        if (a == null) return null;
        var i = o("AdsSABRBudgetDefaultUtils").getDefaultSabrBudgetV2(
          a,
          e,
          n === !0,
        );
        return i.budget;
      }
      var l = t == null ? void 0 : t.fetch__XFBAmSabrBudgetDefaulting;
      if (l == null) return null;
      var s = o("AdsSABRBudgetDefaultUtils").getDefaultSabrBudget(
        l,
        e,
        n === !0,
      );
      return o("AdsSABRBudgetDefaultUtils").isSABRBudgetDefaultingEnabled(!1, e)
        ? s
        : null;
    }
    l.processBudgetDefaultData = e;
  },
  98,
);
