__d(
  "PerformanceSummarySetActiveMetricAction",
  [
    "Laminar",
    "PerformanceSummaryInsightsMetricsProvider",
    "PerformanceSummaryLoggerPlugins",
    "PerformanceSummarySetActiveMetricReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummarySetActiveMetricReducerPlugin"),
            n("PerformanceSummaryInsightsMetricsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "PerformanceSummaryLoggerPlugins.SetActiveMetricActionLoggerPlugin",
            n("PerformanceSummaryLoggerPlugins")
              .SetActiveMetricActionLoggerPlugin,
            {},
          ),
        ];
      },
      "PerformanceSummarySetActiveMetricActionPlugin",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
