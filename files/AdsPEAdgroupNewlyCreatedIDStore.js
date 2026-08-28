__d(
  "AdsPEAdgroupNewlyCreatedIDStore",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsPEAdgroupSortLiveProvider",
    "AdsPEBaseNewlyCreatedIDStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPEAdgroupSortLiveProvider").toFluxStore(),
      s = new (r("AdsPEBaseNewlyCreatedIDStore"))({
        level: "ad",
        draftFragmentStore: r("AdsAdgroupDraftFragmentStore"),
        sortLiveStore: e,
      });
    l.default = s;
  },
  98,
);
