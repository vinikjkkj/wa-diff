__d(
  "PerformanceSummaryBudgetCPAGuidanceCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryBudgetCPAGuidanceCard.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "budgetCPAGuidanceCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .BudgetCPAGuidanceCard,
        ContentComponent: function (t) {
          return s.jsx(r("PerformanceSummaryBudgetCPAGuidanceCard.react"), {
            currentLevel: t.currentLevel,
          });
        },
        isEnabled: function (t) {
          return t.currentLevel === "campaign" || t.currentLevel === "ad_set";
        },
        logKey: "budget_cpa_guidance",
      },
      c = u;
    l.default = c;
  },
  98,
);
