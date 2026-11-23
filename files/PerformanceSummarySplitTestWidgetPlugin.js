__d(
  "PerformanceSummarySplitTestWidgetPlugin",
  [
    "AdsInsightsSectionShim.react",
    "AdsPerformanceSummaryTypes",
    "AdsSplitTestCommonReportingPaneContainer.react",
    "CometPlaceholder.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "splitTest",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .SplitTest,
        ContentComponent: function (t) {
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: s.jsx(r("AdsInsightsSectionShim.react"), {}),
            name: i.id,
            children: s.jsx(
              r("AdsSplitTestCommonReportingPaneContainer.react"),
              {
                currentLevel: t.currentLevel,
                selectedIdsAtCurrentLevel: t.selectedIdsAtCurrentLevel,
              },
            ),
          });
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "split_test",
      },
      c = u;
    l.default = c;
  },
  98,
);
