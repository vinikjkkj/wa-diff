__d(
  "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
  [
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionReducerPlugin",
            ),
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
            ),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionActionPlugin",
    );
    a.exports = e;
  },
  null,
);
