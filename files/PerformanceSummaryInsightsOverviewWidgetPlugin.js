__d(
  "PerformanceSummaryInsightsOverviewWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryInsightsOverviewContainer.react",
    "feature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "performance",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .Insights,
        isEnabled: function () {
          return !0;
        },
        ContentComponent: function (t) {
          return u.jsx(r("PerformanceSummaryInsightsOverviewContainer.react"), {
            currentLevel: t.currentLevel,
            selectedIdsAtCurrentLevel: t.selectedIdsAtCurrentLevel,
          });
        },
        logKey: "insights_overview",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_InsightsOverview_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
