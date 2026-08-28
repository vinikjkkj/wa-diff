__d(
  "AdsPECampaignSortLiveSelectors",
  ["AdsPECampaignSortLiveProvider", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsPECampaignSortLiveProvider").toFluxStore()],
      function () {
        return r("AdsPECampaignSortLiveProvider")().sortInfo;
      },
      { name: i.id + ".getSortInfo" },
    );
    l.getSortInfo = e;
  },
  98,
);
