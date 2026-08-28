__d(
  "AdsDraftClearRecentlyPublishedDataAction",
  ["AdsDraftPublishUIProvider", "AdsDraftPublishUIReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishUIReducerPlugins").ClearRecentlyPublishedReducer,
            n("AdsDraftPublishUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.CLEAR_RECENTLY_PUBLISHED",
    );
    a.exports = e;
  },
  null,
);
