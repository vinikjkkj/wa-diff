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
    "Laminar",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("Laminar").withFluxSelectors(
          {
            account: r("AdsAccountStore").getSelectedAccount,
            frequencyOptions: r(
              "AdsAuctionFrequencyControlProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.frequencyOptions;
            if (
              !o(
                "AdsFrequencyControlGKUtils",
              ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience()
            )
              return e;
            var l = r(
                "AdsCampaignCombinedListStore",
              ).getCampaignIDsSelector_DEPRECATED(),
              s = o("AdsPECampaignGroupSelectors").getAllSelector(),
              u = o("AdsPECampaignSelectors").getAllSelector();
            return o(
              "AdsCampaignGroupTargetFrequencyInAuctionRegeneratePredictionTriggerReducerUtils",
            ).handleReduce(e, t, {
              account: a,
              campaignGroupDataGetter: s,
              campaignDataGetter: u,
              campaignIDsGetter: l,
              frequencyOptions: i,
            });
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
