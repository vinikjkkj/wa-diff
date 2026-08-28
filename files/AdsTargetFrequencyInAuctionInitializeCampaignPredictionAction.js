__d(
  "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
  [
    "AdsCFCampaignProvider",
    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsTargetFrequencyInAuctionInitializeCampaignPredictionReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_TARGET_FREQUENCY_IN_AUCTION_INITIALIZE_CAMPAIGN_PREDICTION",
    );
    a.exports = e;
  },
  null,
);
