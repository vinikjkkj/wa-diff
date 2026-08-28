__d(
  "AdsTargetFrequencyBulkEditDeletePredictionIdAction",
  [
    "AdsTargetFrequencyBulkEditDeletePredictionIdReducerPlugin",
    "AdsTargetFrequencyBulkEditPredictionIdProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTargetFrequencyBulkEditDeletePredictionIdReducerPlugin"),
            n("AdsTargetFrequencyBulkEditPredictionIdProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTargetFrequencyBulkEditDeletePredictionIdActionPlugin",
    );
    a.exports = e;
  },
  null,
);
