__d(
  "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusAction",
  [
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusFailureLoggerPlugin",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusReducerPlugin",
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
        return [
          n("Laminar").__createLogger(
            "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusFailureLoggerPlugin",
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusFailureLoggerPlugin",
            ),
            {},
          ),
        ];
      },
      "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusActionPlugin",
    );
    a.exports = e;
  },
  null,
);
