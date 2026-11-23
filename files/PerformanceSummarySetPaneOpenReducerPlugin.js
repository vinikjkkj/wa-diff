__d(
  "PerformanceSummarySetPaneOpenReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { isMetricsPaneOpen: n.isOpen });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
