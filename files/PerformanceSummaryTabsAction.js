__d(
  "PerformanceSummaryTabsAction",
  [
    "Laminar",
    "PerformanceSummaryTabsDataProvider",
    "PerformanceSummaryTabsReducerPlugin",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("PerformanceSummaryTabsReducerPlugin"),
            n("PerformanceSummaryTabsDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PerformanceSummaryTabsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
