__d(
  "adsMatchedCampaignIDsWithBidStrategyChangeBySelectedCampaignGroupsSelector",
  ["AdsCampaignCombinedListStore", "AdsDMLQueryHandler_DerivedDataBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
      return r(
        "AdsCampaignCombinedListStore",
      ).getCampaignIDsByCampaignGroupIDsSelector_DEPRECATED.getStores();
    }, r("AdsCampaignCombinedListStore").getCampaignIDsByCampaignGroupIDsSelector_DEPRECATED);
    l.dmlGetCampaignIDsByCampaignGroupIDsSelector = e;
  },
  98,
);
