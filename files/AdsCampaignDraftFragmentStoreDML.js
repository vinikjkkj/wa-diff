__d(
  "AdsCampaignDraftFragmentStoreDML",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsPECampaignDraftSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("AdsDMLQueryHandler_DerivedDataBase")).modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignDraftFragmentStore").getRaw(e);
        },
      ),
      u = e.modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignDraftFragmentStore").isNew(e);
        },
      ),
      c = e.modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignDraftFragmentStore").isDeleted(e);
        },
      ),
      d = e.modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r(
            "AdsCampaignDraftFragmentStore",
          ).isNewDraftFragmentWithoutPublishAttempt(e);
        },
      ),
      m = e.modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignDraftFragmentStore").hasDraft(e);
        },
      ),
      p = e.modularLoader(
        function () {
          return [r("AdsCampaignDraftFragmentStore")];
        },
        function (e) {
          return r("AdsCampaignDraftFragmentStore").getChangedFields(e);
        },
      ),
      _ = e.modularLoader(
        function () {
          return o(
            "AdsPECampaignDraftSelectors",
          ).getIsDirtySelector.getStores();
        },
        function (e) {
          return o("AdsPECampaignDraftSelectors").getIsDirtySelector()(e);
        },
      );
    ((l.dmlAdsCampaignDraftFragmentStoreRaw = s),
      (l.dmlAdsCampaignDraftFragmentStoreIsNew = u),
      (l.dmlAdsCampaignDraftFragmentStoreIsDeleted = c),
      (l.dmlAdsCampaignDraftFragmentStoreIsNewDraftWithoutPublishAttempt = d),
      (l.dmlAdsCampaignDraftFragmentStoreHasDraft = m),
      (l.dmlAdsCampaignDraftFragmentStoreGetChangedFields = p),
      (l.dmlAdsCampaignDraftFragmentStoreIsDirty = _));
  },
  98,
);
