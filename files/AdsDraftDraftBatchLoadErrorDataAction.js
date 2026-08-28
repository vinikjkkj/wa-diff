__d(
  "AdsDraftDraftBatchLoadErrorDataAction",
  ["AdsDraftDraftBatchErrorDataReducerPlugin", "AdsDraftProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftBatchErrorDataReducerPlugin"),
            n("AdsDraftProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.BATCH_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
