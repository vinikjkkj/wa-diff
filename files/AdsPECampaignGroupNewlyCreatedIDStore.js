__d(
  "AdsPECampaignGroupNewlyCreatedIDStore",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsPEBaseNewlyCreatedIDStore",
    "AdsPECampaignGroupSortLiveProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPECampaignGroupSortLiveProvider").toFluxStore(),
      s = new (r("AdsPEBaseNewlyCreatedIDStore"))({
        level: "campaign",
        draftFragmentStore: r("AdsCampaignGroupDraftFragmentStore"),
        sortLiveStore: e,
      });
    l.default = s;
  },
  98,
);
