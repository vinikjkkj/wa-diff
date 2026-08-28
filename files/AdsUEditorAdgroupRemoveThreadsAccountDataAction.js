__d(
  "AdsUEditorAdgroupRemoveThreadsAccountDataAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupRemoveThreadsAccountReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_ADGROUP_EDITOR_REMOVE_THREADS_ACCOUNT",
    );
    a.exports = e;
  },
  null,
);
