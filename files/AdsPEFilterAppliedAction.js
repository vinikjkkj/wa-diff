__d(
  "AdsPEFilterAppliedAction",
  [
    "AdsMgmtAdObjectTypeNonHierarchicalReducerPlugin",
    "AdsMgmtAdObjectTypeProvider",
    "AdsMgmtInitialDataFetchReducerPlugins",
    "AdsMgmtInitialDataFetchStateProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMgmtAdObjectTypeNonHierarchicalReducerPlugin"),
            n("AdsMgmtAdObjectTypeProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMgmtInitialDataFetchReducerPlugins").onFetch,
            n("AdsMgmtInitialDataFetchStateProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsSelectionChangeTableUILoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsSelectionChangeTableUILoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "PowerEditor.FILTER.APPLIED",
    );
    a.exports = e;
  },
  null,
);
