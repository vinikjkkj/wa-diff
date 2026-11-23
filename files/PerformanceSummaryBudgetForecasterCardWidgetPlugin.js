__d(
  "PerformanceSummaryBudgetForecasterCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryBudgetForecasterCardContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "budgetForecasterCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .BudgetForecasterCard,
        ContentComponent: function (t) {
          return s.jsx(
            r("PerformanceSummaryBudgetForecasterCardContainer.react"),
            { currentLevel: t.currentLevel },
          );
        },
        isEnabled: function (t) {
          return t.currentLevel === "campaign" || t.currentLevel === "ad_set";
        },
        logKey: "budget_forecaster",
      },
      c = u;
    l.default = c;
  },
  98,
);
