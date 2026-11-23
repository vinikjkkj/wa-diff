__d(
  "PerformanceSummarySetActiveMetricReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.activeMetric
            ? babelHelpers.extends({}, t, { activeMetric: n.activeMetric })
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
