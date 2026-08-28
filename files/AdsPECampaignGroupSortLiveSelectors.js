__d(
  "AdsPECampaignGroupSortLiveSelectors",
  ["AdsPECampaignGroupSortLiveProvider", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsPECampaignGroupSortLiveProvider").toFluxStore()],
      function () {
        return r("AdsPECampaignGroupSortLiveProvider")().sortInfo;
      },
      { name: i.id + ".getSortInfo" },
    );
    l.getSortInfo = e;
  },
  98,
);
