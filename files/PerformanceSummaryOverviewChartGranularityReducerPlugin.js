__d(
  "PerformanceSummaryOverviewChartGranularityReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.selectedGranularityOption;
          return babelHelpers.extends({}, t, { selectedGranularityOption: e });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
