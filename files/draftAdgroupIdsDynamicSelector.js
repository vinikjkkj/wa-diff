__d(
  "draftAdgroupIdsDynamicSelector",
  ["AdsAdgroupDraftFragmentStore", "adsCreateDynamicSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      r("AdsAdgroupDraftFragmentStore").getNewIDsForSelector,
    );
    l.draftAdgroupIdsDynamicSelector = e;
  },
  98,
);
