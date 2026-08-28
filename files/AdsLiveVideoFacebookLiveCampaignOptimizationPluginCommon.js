__d(
  "AdsLiveVideoFacebookLiveCampaignOptimizationPluginCommon",
  [
    "AdsAPIOptimizationGoals",
    "AdsConversionsMessengerCampaignOptimizationPlugin",
    "CTMAdsOptimizationStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getSupportedOptimizationGoals: function (t) {
          var e = t.pageID,
            n = e == null ? void 0 : e.getValueForIndex(0),
            a = o(
              "CTMAdsOptimizationStoreUtils",
            ).getIsCTMPurchaseConversionsOptimizationGoalEligible(n)
              ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
              : [];
          return [r("AdsAPIOptimizationGoals").CONVERSATIONS].concat(a);
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").CONVERSATIONS;
        },
        getClickConversionWindowOptions: function (t, n) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
              return [1, 7];
            default:
              return r(
                "AdsConversionsMessengerCampaignOptimizationPlugin",
              ).getClickConversionWindowOptions(t);
          }
        },
        getViewConversionWindowOptions: function (t) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
              return [0];
            default:
              return r(
                "AdsConversionsMessengerCampaignOptimizationPlugin",
              ).getViewConversionWindowOptions(t);
          }
        },
        getEngagedVideoViewWindowOptions: function (t) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
              return [0];
            default:
              return r(
                "AdsConversionsMessengerCampaignOptimizationPlugin",
              ).getEngagedVideoViewWindowOptions(t);
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
