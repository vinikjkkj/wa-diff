__d(
  "PerformanceSummarySetPlacementChartStateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            metrics: n.metrics != null ? n.metrics : t.metrics,
            subsection: n.subsection != null ? n.subsection : t.subsection,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
