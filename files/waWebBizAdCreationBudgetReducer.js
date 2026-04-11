__d(
  "waWebBizAdCreationBudgetReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "budget_reducer.update_budget":
            e.budgetData.budget = t.budgetData.budget;
            break;
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
