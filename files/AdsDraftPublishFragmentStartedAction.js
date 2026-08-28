__d(
  "AdsDraftPublishFragmentStartedAction",
  [
    "AdsDraftPublishingManagerFragmentStartedReducerPlugin",
    "AdsDraftPublishingManagerProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishingManagerFragmentStartedReducerPlugin"),
            n("AdsDraftPublishingManagerProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "DRAFT_PUBLISH_FRAGMENT_STARTED",
    );
    a.exports = e;
  },
  null,
);
