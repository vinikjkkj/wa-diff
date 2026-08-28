__d(
  "AdsDraftDraftDiscardErrorDataAction",
  [
    "AdsMgmtDeleteDraftDialogErrorReducerPlugin",
    "AdsMgmtDeleteDraftDialogShownProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMgmtDeleteDraftDialogErrorReducerPlugin"),
            n("AdsMgmtDeleteDraftDialogShownProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.DISCARD.ERROR",
    );
    a.exports = e;
  },
  null,
);
