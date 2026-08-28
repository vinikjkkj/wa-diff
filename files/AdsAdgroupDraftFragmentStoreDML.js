__d(
  "AdsAdgroupDraftFragmentStoreDML",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsPEAdgroupDraftSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("AdsDMLQueryHandler_DerivedDataBase")).modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsAdgroupDraftFragmentStore").getRaw(e);
        },
      ),
      u = e.modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsAdgroupDraftFragmentStore").isNew(e);
        },
      ),
      c = e.modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsAdgroupDraftFragmentStore").isDeleted(e);
        },
      ),
      d = e.modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r(
            "AdsAdgroupDraftFragmentStore",
          ).isNewDraftFragmentWithoutPublishAttempt(e);
        },
      ),
      m = e.modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsAdgroupDraftFragmentStore").hasDraft(e);
        },
      ),
      p = e.modularLoader(
        function () {
          return [r("AdsAdgroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsAdgroupDraftFragmentStore").getChangedFields(e);
        },
      ),
      _ = e.modularLoader(
        function () {
          return o("AdsPEAdgroupDraftSelectors").getIsDirtySelector.getStores();
        },
        function (e) {
          return o("AdsPEAdgroupDraftSelectors").getIsDirtySelector()(e);
        },
      );
    ((l.dmlAdsAdgroupDraftFragmentStoreRaw = s),
      (l.dmlAdsAdgroupDraftFragmentStoreIsNew = u),
      (l.dmlAdsAdgroupDraftFragmentStoreIsDeleted = c),
      (l.dmlAdsAdgroupDraftFragmentStoreIsNewDraftWithoutPublishAttempt = d),
      (l.dmlAdsAdgroupDraftFragmentStoreHasDraft = m),
      (l.dmlAdsAdgroupDraftFragmentStoreGetChangedFields = p),
      (l.dmlAdsAdgroupDraftFragmentStoreIsDirty = _));
  },
  98,
);
