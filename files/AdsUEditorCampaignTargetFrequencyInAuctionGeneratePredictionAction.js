__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
  [
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
            ),
            n("AdsTargetFrequencyInAuctionPredictionStatusProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionActionPlugin",
    );
    a.exports = e;
  },
  null,
);
