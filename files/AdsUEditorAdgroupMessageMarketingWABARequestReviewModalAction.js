__d(
  "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalAction",
  [
    "AdsUEditorAdgroupMessageMarketingSetupProvider",
    "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalReducerPlugin",
            ),
            n("AdsUEditorAdgroupMessageMarketingSetupProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorAdgroupMessageMarketingWABARequestReviewModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
