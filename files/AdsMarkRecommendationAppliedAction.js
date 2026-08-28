__d(
  "AdsMarkRecommendationAppliedAction",
  [
    "AdsMarkRecommendationAppliedProvider",
    "AdsMarkRecommendationAppliedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMarkRecommendationAppliedReducerPlugin"),
            n("AdsMarkRecommendationAppliedProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMarkRecommendationAppliedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
