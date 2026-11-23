__d(
  "PerformanceSummarySetPacingSettingsAction",
  [
    "Laminar",
    "PerformanceSummaryLoggerPlugins",
    "PerformanceSummaryPacingChartSettingsProvider",
    "PerformanceSummarySetPacingSettingsReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummarySetPacingSettingsReducerPlugin"),
            n("PerformanceSummaryPacingChartSettingsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "PerformanceSummaryLoggerPlugins.SetPacingSettingsActionLoggerPlugin",
            n("PerformanceSummaryLoggerPlugins")
              .SetPacingSettingsActionLoggerPlugin,
            { data: n("PerformanceSummaryPacingChartSettingsProvider") },
          ),
        ];
      },
      "PerformanceSummarySetPacingSettingsActionPlugin",
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
