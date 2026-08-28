__d(
  "AdsTargetFrequencyBulkEditSetPredictionIdAction",
  [
    "AdsTargetFrequencyBulkEditPredictionIdProvider",
    "AdsTargetFrequencyBulkEditSetPredictionIdReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTargetFrequencyBulkEditSetPredictionIdReducerPlugin"),
            n("AdsTargetFrequencyBulkEditPredictionIdProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTargetFrequencyBulkEditSetPredictionIdActionPlugin",
    );
    a.exports = e;
  },
  null,
);
