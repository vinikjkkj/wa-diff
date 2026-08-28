__d(
  "AdsDraftDraftShowPublishDetailsDataAction",
  [
    "AdsDraftDraftShowPublishDetailsReducerPlugin",
    "AdsDraftPublishUIProvider",
    "AdsDraftPublishUIReducerPlugins",
    "AdsPELazyDialogDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftShowPublishDetailsReducerPlugin"),
            n("AdsPELazyDialogDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishUIReducerPlugins").ShowPublishDetailsReducer,
            n("AdsDraftPublishUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.SHOW_PUBLISH_DETAILS",
    );
    a.exports = e;
  },
  null,
);
