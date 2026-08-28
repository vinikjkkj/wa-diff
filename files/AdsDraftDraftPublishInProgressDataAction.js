__d(
  "AdsDraftDraftPublishInProgressDataAction",
  [
    "AdsDraftPublishAdsDraftDraftPublishInProgressDataReducerPlugin",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
    "AdsDraftPublishReducerPlugins",
    "AdsDraftPublishingManagerProvider",
    "AdsDraftPublishingManagerPublishInProgressDataReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsDraftDraftPublishInProgressDataReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFPlaceOrderProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n("AdsDraftPublishAdsDraftDraftPublishInProgressDataReducerPlugin"),
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
            n("AdsDraftPublishingManagerPublishInProgressDataReducerPlugin"),
            n("AdsDraftPublishingManagerProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.PUBLISH_IN_PROGRESS",
    );
    a.exports = e;
  },
  null,
);
