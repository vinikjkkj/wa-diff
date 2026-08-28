__d(
  "AdsReviewViewQuickSwitchToEditFieldDataAction",
  [
    "AdsAdditionalOptionsClickEditInReviewDataReducerPlugin",
    "AdsAdditionalOptionsDataProvider",
    "AdsReviewModeDataProvider",
    "AdsReviewViewQuickSwitchToEditFieldDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsAdditionalOptionsClickEditInReviewDataReducerPlugin"),
            n("AdsAdditionalOptionsDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReviewViewQuickSwitchToEditFieldDataReducerPlugin"),
            n("AdsReviewModeDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReviewViewQuickSwitchToEditFieldDataActionPlugin",
    );
    a.exports = e;
  },
  null,
);
