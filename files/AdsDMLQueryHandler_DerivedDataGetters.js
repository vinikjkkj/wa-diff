__d(
  "AdsDMLQueryHandler_DerivedDataGetters",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "AdsAdgroupCombinedStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupLiveStoreFieldGranularProxy",
    "AdsCampaignCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsPECampaignGroupLiveTableStore",
    "AdsPECampaignLiveTableStore",
    "adsMgmtCampaignGroupSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.L1Adgroup = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsAdgroupCombinedStore"))),
          (t.L1AdgroupAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsAdgroupCombinedStore"))),
          (t.L1AdgroupLiveAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsAdgroupLiveStoreFieldGranularProxy"))),
          (t.L1AdgroupLive = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsAdgroupLiveStoreFieldGranularProxy"))),
          (t.L1AdgroupDraftFragmentIsNew = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).loader(
            function () {
              return [r("AdsAdgroupDraftFragmentStore")];
            },
            function (e) {
              return r("AdsAdgroupDraftFragmentStore").isNew(e);
            },
          )),
          (t.L1AdgroupList = o("AdsDMLQueryHandler_DerivedDataBase").loader(
            function () {
              return [
                o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore,
              ];
            },
            function (e) {
              return o(
                "AdsAdgroupCombinedListStore",
              ).AdsAdgroupCombinedListStore.getAdgroupIDs(
                e.accountID,
                e.campaignGroupIDs,
              );
            },
          )),
          (t.L2Campaign = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsCampaignCombinedStore"))),
          (t.L2CampaignAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsCampaignCombinedStore"))),
          (t.L2CampaignLiveAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsPECampaignLiveTableStore"))),
          (t.L2CampaignLive = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsPECampaignLiveTableStore"))),
          (t.L2CampaignDraftFragmentIsNew = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).loader(
            function () {
              return [r("AdsCampaignDraftFragmentStore")];
            },
            function (e) {
              return r("AdsCampaignDraftFragmentStore").isNew(e);
            },
          )),
          (t.L2CampaignList = o("AdsDMLQueryHandler_DerivedDataBase").loader(
            function () {
              return [r("AdsCampaignCombinedListStore")];
            },
            function (e) {
              return r("AdsCampaignCombinedListStore").getCampaignIDs(
                e.accountID,
                e.campaignGroupIDs,
              );
            },
          )),
          (t.L3CampaignGroup = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsCampaignGroupCombinedStore"))),
          (t.L3CampaignGroupAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsCampaignGroupCombinedStore"))),
          (t.L3CampaignGroupLiveAll = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByAllIdsLoader(r("AdsPECampaignGroupLiveTableStore"))),
          (t.L3CampaignGroupSelectedIDs = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).selectorLoaderWithoutArgs(
            o("adsMgmtCampaignGroupSelectedIdsSelector")
              .adsMgmtCampaignGroupSelectedIdsSelector,
          )),
          (t.L3CampaignGroupLive = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).storeByIdLoader(r("AdsPECampaignGroupLiveTableStore"))),
          (t.L4Account = o("AdsDMLQueryHandler_DerivedDataBase").loader(
            function () {
              return [r("AdsAccountStore")];
            },
            function (e) {
              return r("AdsAccountStore").get(e);
            },
          )),
          (t.L4SelectedAccount = o(
            "AdsDMLQueryHandler_DerivedDataBase",
          ).selectorLoaderWithoutArgs(r("AdsAccountStore").getSelectedAccount)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("AdsDMLQueryHandler_DerivedDataBase").TDerivedBase);
    l.TDerived = e;
  },
  98,
);
