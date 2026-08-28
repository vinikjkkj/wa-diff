__d(
  "AdsUEditorAdgroupSetFreeformTestAction",
  [
    "AdsExperimentsAdObjectIDsInDraftTestProvider",
    "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
    "AdsExperimentsFunnelUserActionLoggerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsAdgroupSetDraftTestReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsAdgroupDraftFragmentsDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
              .AdsExperimentsAdgroupIDsInDraftTestReducerPlugins,
            n("AdsExperimentsAdObjectIDsInDraftTestProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsExperimentsFunnelUserActionLoggerPlugins.AdsTALCreateAdgroupDraftTestCompletedReducer",
            n("AdsExperimentsFunnelUserActionLoggerPlugins")
              .AdsTALCreateAdgroupDraftTestCompletedReducer,
            {},
          ),
        ];
      },
      "AdsUEditorAdgroupSetFreeformTestActionPlugin",
    );
    a.exports = e;
  },
  null,
);
