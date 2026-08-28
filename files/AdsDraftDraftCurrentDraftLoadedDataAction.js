__d(
  "AdsDraftDraftCurrentDraftLoadedDataAction",
  [
    "AdsDraftDraftCurrentDraftLoadedDataReducerPlugin",
    "AdsDraftLoadedDataReducerPlugin",
    "AdsDraftProvider",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
    "AdsDraftPublishReducerPlugins",
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
            n("AdsDraftDraftCurrentDraftLoadedDataReducerPlugin"),
            n("AdsDraftPublishProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftLoadedDataReducerPlugin"),
            n("AdsDraftProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins").CurrentDraftLoadedReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
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
      "AdsDraft.DRAFT.CURRENT_DRAFT_LOADED",
    );
    a.exports = e;
  },
  null,
);
