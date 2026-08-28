__d(
  "AdsCampaignGroupDraftFragmentStoreDML",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsPECampaignGroupDraftSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("AdsDMLQueryHandler_DerivedDataBase")).modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignGroupDraftFragmentStore").getRaw(e);
        },
      ),
      u = e.modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignGroupDraftFragmentStore").isNew(e);
        },
      ),
      c = e.modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignGroupDraftFragmentStore").isDeleted(e);
        },
      ),
      d = e.modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r(
            "AdsCampaignGroupDraftFragmentStore",
          ).isNewDraftFragmentWithoutPublishAttempt(e);
        },
      ),
      m = e.modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignGroupDraftFragmentStore").hasDraft(e);
        },
      ),
      p = e.modularLoader(
        function () {
          return [r("AdsCampaignGroupDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignGroupDraftFragmentStore").getChangedFields(e);
        },
      ),
      _ = e.modularLoader(
        function () {
          return o(
            "AdsPECampaignGroupDraftSelectors",
          ).getIsDirtySelector.getStores();
        },
        function (e) {
          return o("AdsPECampaignGroupDraftSelectors").getIsDirtySelector()(e);
        },
      );
    ((l.dmlAdsCampaignGroupDraftFragmentStoreRaw = s),
      (l.dmlAdsCampaignGroupDraftFragmentStoreIsNew = u),
      (l.dmlAdsCampaignGroupDraftFragmentStoreIsDeleted = c),
      (l.dmlAdsCampaignGroupDraftFragmentStoreIsNewDraftWithoutPublishAttempt =
        d),
      (l.dmlAdsCampaignGroupDraftFragmentStoreHasDraft = m),
      (l.dmlAdsCampaignGroupDraftFragmentStoreGetChangedFields = p),
      (l.dmlAdsCampaignGroupDraftFragmentStoreIsDirty = _));
  },
  98,
);
