__d(
  "isAdObjectPublishedStoreThunkSelector",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsAdgroupDraftFragmentStore"),
      function (e) {
        var t =
          r("AdsAdgroupDraftFragmentStore").isNew(e) ||
          r("AdsCampaignDraftFragmentStore").isNew(e);
        return !t;
      },
    );
    l.default = e;
  },
  98,
);
