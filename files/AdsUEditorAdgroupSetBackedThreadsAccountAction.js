__d(
  "AdsUEditorAdgroupSetBackedThreadsAccountAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSetBackedThreadsAccountReducerPlugin",
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
      "AdsUEditorAdgroupSetBackedThreadsAccountActionPlugin",
    );
    a.exports = e;
  },
  null,
);
