__d(
  "AdsGuidanceBudgetSeasonalRecommendationPostPublishAction",
  [
    "AdsGuidanceBudgetSeasonalRecommendationDataProvider",
    "AdsGuidanceBudgetSeasonalRecommendationPostPublishReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsGuidanceBudgetSeasonalRecommendationPostPublishReducerPlugin",
            ),
            n("AdsGuidanceBudgetSeasonalRecommendationDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceBudgetSeasonalRecommendationPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
