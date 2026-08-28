__d(
  "AdsPECampaignNewlyCreatedIDStore",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsPEBaseNewlyCreatedIDStore",
    "AdsPECampaignSortLiveSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsPECampaignSortLiveSelectors").getSortInfo.getStores()[0],
      s = new (r("AdsPEBaseNewlyCreatedIDStore"))({
        level: "ad_set",
        draftFragmentStore: r("AdsCampaignDraftFragmentStore"),
        sortLiveStore: e,
      });
    l.default = s;
  },
  98,
);
