__d(
  "AdsPERemoveFakePublishIDAction",
  [
    "AdsDraftPublishProvider",
    "AdsPERemoveFakePublishIDReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPERemoveFakePublishIDReducerPlugin"),
            n("AdsDraftPublishProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "DRAFT.REMOVE_FAKE_PUBLISH_ID",
    );
    a.exports = e;
  },
  null,
);
