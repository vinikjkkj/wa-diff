__d(
  "PerformanceSummaryROASCardSetActiveMetricAction",
  [
    "Laminar",
    "PerformanceSummaryROASCardMetricsProvider",
    "PerformanceSummaryROASCardSetActiveMetricReducerPlugin",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummaryROASCardSetActiveMetricReducerPlugin"),
            n("PerformanceSummaryROASCardMetricsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PerformanceSummaryROASCardSetActiveMetricActionPlugin",
      void 0,
      function () {
        return r("vulture")("D53szk6x-0csj9GjqIkcndrsQ6s=");
      },
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    i.exports = e;
  },
  34,
);
