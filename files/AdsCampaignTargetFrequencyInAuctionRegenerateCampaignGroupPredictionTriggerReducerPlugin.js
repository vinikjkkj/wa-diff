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
            l = o("AdsPECampaignGroupSelectors").getAllByFieldsSelector(),
            s = function (t) {
              return l(t, {
                frequency_control_specs: null,
                lifetime_budget: null,
                objective: null,
              });
            },
            u = o("AdsPECampaignSelectors").getAllByFieldsSelector(),
            c = function (t) {
              return u(t, {
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
          ).handleReduce(t, n, {
            account: e,
            campaignDataGetter: c,
            campaignGroupDataGetter: s,
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
