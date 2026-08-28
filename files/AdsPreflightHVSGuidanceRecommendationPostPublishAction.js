__d(
  "AdsPreflightHVSGuidanceRecommendationPostPublishAction",
  [
    "AdsPreflightHVSGuidanceRecommendationDataProvider",
    "AdsPreflightHVSGuidanceRecommendationReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPreflightHVSGuidanceRecommendationReducerPlugins")
              .AdsPreflightHVSGuidanceRecommendationPostPublishReducerPlugin,
            n("AdsPreflightHVSGuidanceRecommendationDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPreflightHVSGuidanceRecommendationPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
