__d(
  "adsMgmtCampaignIDsFromSelectedParentIDsByLevelSelector",
  [
    "AdsAccountStore",
    "AdsCampaignCombinedListStore",
    "adsCreateStoreSelector",
    "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
    "adsStoreFlattenLists",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateStoreSelector")(
        [r("AdsCampaignCombinedListStore")].concat(
          r("adsMgmtCampaignGroupSelectedIdsByLevelSelector").getStores(),
          [r("AdsAccountStore")],
        ),
        function () {
          return r("adsStoreFlattenLists")(
            r("AdsCampaignCombinedListStore").getForCampaignGroups(
              r("AdsAccountStore").getSelectedAccountIDX(),
              r("adsMgmtCampaignGroupSelectedIdsByLevelSelector")(),
            ),
          );
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
