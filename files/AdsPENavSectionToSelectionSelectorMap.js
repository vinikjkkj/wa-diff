__d(
  "AdsPENavSectionToSelectionSelectorMap",
  [
    "AdsPENavigationUtils",
    "AdsSelectionLevelSelectors",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMgmtAdgroupAllSelectedSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtAdgroupSelectionSelector",
    "adsMgmtCampaignAllSelectedSelector",
    "adsMgmtCampaignGroupAllSelectedSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectionSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsMgmtCampaignSelectionSelector",
    "adsPENavSectionToSelectionSelectorMapUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          r("adsMgmtAdgroupAllSelectedSelector"),
          r("adsMgmtCampaignAllSelectedSelector"),
          r("adsMgmtCampaignGroupAllSelectedSelector"),
        ],
        function (t, n, r, o) {
          switch (t) {
            case "L1":
              return n;
            case "L2":
              return r;
            case "L3":
              return o;
          }
          return !1;
        },
        { name: i.id + ".selectAllClickedSelector" },
      ),
      u = e(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
        ],
        function (t, n) {
          return t === "PACKAGE_AD_CREATION"
            ? r("AdsPENavigationUtils").getNavSectionFromAdObjectLevel(n)
            : t;
        },
        { name: i.id + ".navSectionSelector" },
      ),
      c = e(
        [
          u,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
        ],
        function (t, n, r, a) {
          return o("adsPENavSectionToSelectionSelectorMapUtils").selectedIDs(
            t,
            n,
            r,
            a,
          );
        },
        { name: i.id + ".selectedIDsSelector" },
      ),
      d = e(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          r("adsMgmtAdgroupSelectionSelector"),
          r("adsMgmtCampaignSelectionSelector"),
          r("adsMgmtCampaignGroupSelectionSelector"),
        ],
        function (t, n, o, a) {
          switch (t) {
            case "L1":
              return n;
            case "L2":
              return o;
            case "L3":
              return a;
          }
          return r("immutable").OrderedSet();
        },
        { name: i.id + ".selectionSelector" },
      );
    ((l.selectAllClickedSelector = s),
      (l.navSectionSelector = u),
      (l.selectedIDsSelector = c),
      (l.selectionSelector = d));
  },
  98,
);
