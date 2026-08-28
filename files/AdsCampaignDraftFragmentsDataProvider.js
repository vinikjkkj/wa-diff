__d(
  "AdsCampaignDraftFragmentsDataProvider",
  [
    "AdsCampaignDraftFragmentsDataProviderPlugin",
    "AdsCampaignDraftFragmentsInstreamVideosDefaultOptInDuplicationTriggerReducerPlugin",
    "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerPlugin",
    "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
    "AdsInstreamVideosDefaultOptInDuplicationProvider",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsCampaignDraftFragmentsDataProviderPlugin"),
      "AdsCampaignDraftFragmentsDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n(
              "AdsCampaignDraftFragmentsInstreamVideosDefaultOptInDuplicationTriggerReducerPlugin",
            ),
            "AdsCampaignDraftFragmentsInstreamVideosDefaultOptInDuplicationTriggerReducerPlugin",
            n("AdsInstreamVideosDefaultOptInDuplicationProvider"),
          ),
          n("Laminar").__createTriggerReducer(
            n(
              "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerPlugin",
            ),
            "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerPlugin",
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
            ),
          ),
          n("Laminar").__createTriggerReducer(
            n(
              "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
            ),
            "AdsCampaignTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
            n("AdsTargetFrequencyInAuctionPredictionStatusProvider"),
          ),
        ];
      },
    );
  },
  null,
);
