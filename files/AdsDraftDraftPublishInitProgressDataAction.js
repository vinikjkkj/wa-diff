__d(
  "AdsDraftDraftPublishInitProgressDataAction",
  ["AdsDraftPublishUIProvider", "AdsDraftPublishUIReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishUIReducerPlugins").FakeProgressReducer,
            n("AdsDraftPublishUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.PUBLISH_INIT_PROGRESS",
    );
    a.exports = e;
  },
  null,
);
