__d(
  "PerformanceSummaryLoggerPlugins",
  ["AdsPerformanceSummaryTypes", "PerformanceSummaryLoggingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        log: function (t) {
          o("PerformanceSummaryLoggingUtils").logClick(
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
              .Insights,
            o("PerformanceSummaryLoggingUtils").PerformanceSummaryEventTypesEnum
              .ChangeActiveMetric,
            !1,
            { message_id: t.activeMetric },
          );
        },
      },
      s = {
        log: function (t, n) {
          var e = n.data;
          o("PerformanceSummaryLoggingUtils").logClick(
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
              .BreakdownCharts,
            o("PerformanceSummaryLoggingUtils").PerformanceSummaryEventTypesEnum
              .ChangeSelectedMetrics,
            !1,
            {
              message_id: "placements",
              message: JSON.stringify({
                selectedMetrics: e.metrics,
                subsection: e.subsection,
              }),
            },
          );
        },
      },
      u = {
        log: function (t, n) {
          var e = n.data;
          o("PerformanceSummaryLoggingUtils").logClick(
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
              .Delivery,
            o("PerformanceSummaryLoggingUtils").PerformanceSummaryEventTypesEnum
              .ChangeSelectedMetrics,
            !1,
            {
              message: JSON.stringify({
                selectedMetrics: e.metrics,
                subsection: e.subsection,
                section: e.section,
              }),
            },
          );
        },
      };
    ((l.SetActiveMetricActionLoggerPlugin = e),
      (l.SetPlacementChartStateActionLoggerPlugin = s),
      (l.SetPacingSettingsActionLoggerPlugin = u));
  },
  98,
);
