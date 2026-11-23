__d(
  "PerformanceSummaryConfirmChartSettingsAction",
  [
    "Laminar",
    "PerformanceSummaryConfirmChartSettingsReducerPlugin",
    "PerformanceSummaryInsightsMetricsProvider",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummaryConfirmChartSettingsReducerPlugin"),
            n("PerformanceSummaryInsightsMetricsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PerformanceSummaryConfirmChartSettingsActionPlugin",
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
