__d(
  "AdsDraftLoginAsDraftsLoadedDataAction",
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
      "AdsDraft.LOGIN_AS.DRAFTS_LOADED",
    );
    a.exports = e;
  },
  null,
);
