__d(
  "AdsPreflightHVSGuidanceRecommendationReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            shouldShowPostPublishRecommendation:
              n.shouldShowPostPublishRecommendation,
          });
        },
      },
      l = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, {
            hvsSuggestedObjective: n.hvsSuggestedObjective,
            selectedObjective: n.selectedObjective,
            shouldShowObjectiveRecommendation:
              n.shouldShowObjectiveRecommendation,
            isCTXGuidance: n.isCTXGuidance,
            isLeadsGuidance: n.isLeadsGuidance,
          });
        },
      };
    ((i.AdsPreflightHVSGuidanceRecommendationPostPublishReducerPlugin = e),
      (i.AdsPreflightHVSGuidanceRecommendationEditObjectiveReducerPlugin = l));
  },
  66,
);
