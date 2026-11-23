__d(
  "PerformanceSummarySetPlacementChartStateAction",
  [
    "Laminar",
    "PerformanceSummaryLoggerPlugins",
    "PerformanceSummaryPlacementOverviewProvider",
    "PerformanceSummarySetPlacementChartStateReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummarySetPlacementChartStateReducerPlugin"),
            n("PerformanceSummaryPlacementOverviewProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "PerformanceSummaryLoggerPlugins.SetPlacementChartStateActionLoggerPlugin",
            n("PerformanceSummaryLoggerPlugins")
              .SetPlacementChartStateActionLoggerPlugin,
            { data: n("PerformanceSummaryPlacementOverviewProvider") },
          ),
        ];
      },
      "PerformanceSummarySetPlacementChartStateActionPlugin",
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
