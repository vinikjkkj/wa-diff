__d(
  "PerformanceSummaryUpdateSelfHistoricalBenchmarkDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.clearAll === !0) {
            var e;
            return babelHelpers.extends({}, t, {
              selfHistoricalBenchmarkData:
                ((e = {}),
                (e.three_months = null),
                (e.six_months = null),
                (e.nine_months = null),
                (e.twelve_months = null),
                e),
            });
          }
          if (n.dateRange != null) {
            var r;
            return babelHelpers.extends({}, t, {
              selfHistoricalBenchmarkData: babelHelpers.extends(
                {},
                t.selfHistoricalBenchmarkData,
                ((r = {}), (r[n.dateRange] = n.benchmarkValue), r),
              ),
            });
          }
          return t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
