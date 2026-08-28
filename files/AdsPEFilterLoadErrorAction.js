__d(
  "AdsPEFilterLoadErrorAction",
  [
    "AdsMgmtInitialDataFetchReducerPlugins",
    "AdsMgmtInitialDataFetchStateProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMgmtInitialDataFetchReducerPlugins").onFetch,
            n("AdsMgmtInitialDataFetchStateProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.FILTER.LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
