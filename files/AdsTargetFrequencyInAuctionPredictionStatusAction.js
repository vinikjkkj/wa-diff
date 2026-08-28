__d(
  "AdsTargetFrequencyInAuctionPredictionStatusAction",
  [
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "AdsTargetFrequencyInAuctionPredictionStatusReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTargetFrequencyInAuctionPredictionStatusReducerPlugin"),
            n("AdsTargetFrequencyInAuctionPredictionStatusProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTargetFrequencyInAuctionPredictionStatusActionPlugin",
    );
    a.exports = e;
  },
  null,
);
