__d(
  "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAuctionFrequencyControlProvider",
    "AdsCampaignCombinedListStore",
    "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerUtils",
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
              s = o("AdsPECampaignGroupSelectors").getAllByFieldsSelector(),
              u = function (t) {
                return s(t, {
                  frequency_control_specs: null,
                  lifetime_budget: null,
                  objective: null,
                });
              },
              c = o("AdsPECampaignSelectors").getAllByFieldsSelector(),
              d = function (t) {
                return c(t, {
                  end_time: null,
                  optimization_goal: null,
                  placement: null,
                  promoted_object: null,
                  start_time: null,
                  targeting: null,
                });
              };
            return o(
              "AdsCampaignTargetFrequencyInAuctionRegenerateCampaignGroupPredictionTriggerReducerUtils",
            ).handleReduce(e, t, {
              account: a,
              campaignDataGetter: d,
              campaignGroupDataGetter: u,
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
