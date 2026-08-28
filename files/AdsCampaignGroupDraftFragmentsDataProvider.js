__d(
  "AdsCampaignGroupDraftFragmentsDataProvider",
  [
    "AdsCampaignGroupDraftFragmentsDataProviderPlugin",
    "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsCampaignGroupDraftFragmentsDataProviderPlugin"),
      "AdsCampaignGroupDraftFragmentsDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n(
              "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
            ),
            "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
            ),
          ),
        ];
      },
    );
  },
  null,
);
