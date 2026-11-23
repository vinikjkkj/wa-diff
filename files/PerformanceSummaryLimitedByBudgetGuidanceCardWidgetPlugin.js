__d(
  "PerformanceSummaryLimitedByBudgetGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryLimitedByBudgetGuidanceCardContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "limitedByBudgetGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .LimitedByBudgetGuidanceCard,
        ContentComponent: function (t) {
          return s.jsx(
            r("PerformanceSummaryLimitedByBudgetGuidanceCardContainer.react"),
            { currentLevel: t.currentLevel },
          );
        },
        isEnabled: function (t) {
          return t.currentLevel === "campaign" || t.currentLevel === "ad_set";
        },
        logKey: "limited_by_budget_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
