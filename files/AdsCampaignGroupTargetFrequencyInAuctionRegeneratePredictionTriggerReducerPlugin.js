__d(
  "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAuctionFrequencyControlProvider",
    "AdsCampaignCombinedListStore",
    "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
    "AdsFrequencyControlGKUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (
            !o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience()
          )
            return t;
          var e = r("AdsAccountStore").getSelectedAccount(),
            a = r("AdsAuctionFrequencyControlProvider").toFluxSelector()(),
            i = r(
              "AdsCampaignCombinedListStore",
            ).getCampaignIDsSelector_DEPRECATED(),
            l = o("AdsPECampaignGroupSelectors").getAllSelector(),
            s = o("AdsPECampaignSelectors").getAllSelector();
          return o(
            "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
          ).handleReduce(t, n, {
            account: e,
            campaignGroupDataGetter: l,
            campaignDataGetter: s,
            campaignIDsGetter: i,
            frequencyOptions: a,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
