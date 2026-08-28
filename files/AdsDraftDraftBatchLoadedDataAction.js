__d(
  "AdsDraftDraftBatchLoadedDataAction",
  ["AdsDraftDraftBatchLoadedDataReducerPlugin", "AdsDraftProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftBatchLoadedDataReducerPlugin"),
            n("AdsDraftProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
