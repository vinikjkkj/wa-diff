__d(
  "AdsPEAdgroupSortLiveSelectors",
  ["AdsPEAdgroupSortLiveProvider", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsPEAdgroupSortLiveProvider").toFluxStore()],
      function () {
        return r("AdsPEAdgroupSortLiveProvider")().sortInfo;
      },
      { name: i.id + ".getSortInfo" },
    );
    l.getSortInfo = e;
  },
  98,
);
