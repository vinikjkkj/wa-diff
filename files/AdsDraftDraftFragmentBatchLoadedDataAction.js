__d(
  "AdsDraftDraftFragmentBatchLoadedDataAction",
  [
    "AdsDraftFragmentValidationProvider",
    "AdsDraftFragmentValidationReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentValidationUpdatedAsMap,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsDraftDraftFragmentBatchLoadedLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsDraftDraftFragmentBatchLoadedLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
