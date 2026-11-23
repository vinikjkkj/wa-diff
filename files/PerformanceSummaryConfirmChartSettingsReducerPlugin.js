__d(
  "PerformanceSummaryConfirmChartSettingsReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.isPeersetBenchmarkToggleOn,
            r = n.isSelfHistoricalBenchmarkToggleOn,
            o = n.isViewHistoryToggleSelected,
            a = n.selfHistoricalBenchmarkDateRange;
          return babelHelpers.extends({}, t, {
            isViewHistoryToggleSelected: o,
            isPeersetBenchmarkToggleOn: e,
            isSelfHistoricalBenchmarkToggleOn: r,
            selfHistoricalBenchmarkDateRange: a,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
