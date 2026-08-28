__d(
  "AdsDraftPublishPublishStartedAction",
  [
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
    "AdsDraftPublishRealtimePublishStartedReducerPlugin",
    "AdsDraftPublishReducerPlugins",
    "AdsDraftPublishingManagerProvider",
    "AdsDraftPublishingManagerPublishStartActionReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishRealtimePublishStartedReducerPlugin"),
            n("AdsDraftPublishProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins").PublishInProgressReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishingManagerPublishStartActionReducerPlugin"),
            n("AdsDraftPublishingManagerProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "DRAFT_PUBLISH_PUBLISH_STARTED",
    );
    a.exports = e;
  },
  null,
);
