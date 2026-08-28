__d(
  "AdsGuidanceUnderpoweredExperimentPostPublishAction",
  [
    "AdsGuidanceUnderpoweredExperimentDataProvider",
    "AdsGuidanceUnderpoweredExperimentPostPublishReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceUnderpoweredExperimentPostPublishReducerPlugin"),
            n("AdsGuidanceUnderpoweredExperimentDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceUnderpoweredExperimentPostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
