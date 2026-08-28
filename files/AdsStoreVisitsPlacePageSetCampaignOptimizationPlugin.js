__d(
  "AdsStoreVisitsPlacePageSetCampaignOptimizationPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 500,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "store_visits/place_page_set",
        pivots: {
          objective: r("AdsAPIObjectives").STORE_VISITS,
          promotedObjectType: r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID,
        },
        getDefaultBidAmount: function (n, o) {
          return n === r("AdsAPIOptimizationGoals").REACH
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
        getBidControlType: function (t) {
          return t === r("AdsAPIOptimizationGoals").REACH
            ? r("AdsBidControlType").ANY
            : r("AdsBidControlType").AUTO_BID_ONLY;
        },
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").REACH,
            r("AdsAPIOptimizationGoals").STORE_VISITS,
          ];
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").REACH;
        },
        getCanUseConversionWindow: function () {
          return !0;
        },
        getClickConversionWindowOptions: function () {
          return [1, 7];
        },
        getViewConversionWindowOptions: function () {
          return [0, 1];
        },
        getDefaultConversionWindowLength: function () {
          return 7;
        },
        getDefaultViewConversionWindowLength: function () {
          return 1;
        },
        getShouldDefaultToAttributionSpec: function () {
          return !0;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
