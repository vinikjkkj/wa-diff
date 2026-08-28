__d(
  "AdsDraftDraftDiscardedDataAction",
  [
    "AdsMgmtDeleteDraftDialogShownProvider",
    "AdsMgmtHideDeleteDraftDialogReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMgmtHideDeleteDraftDialogReducerPlugin"),
            n("AdsMgmtDeleteDraftDialogShownProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.DISCARDED",
    );
    a.exports = e;
  },
  null,
);
