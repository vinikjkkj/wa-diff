__d(
  "AdsReviewViewToggleDataAction",
  [
    "AdsReviewModeDataProvider",
    "AdsReviewViewToggleDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReviewViewToggleDataReducerPlugin"),
            n("AdsReviewModeDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReviewModalToggleDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
