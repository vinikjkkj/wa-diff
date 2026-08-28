__d(
  "adsUEditorCrepeCurrentLevelIDsSelector",
  [
    "AdsMgmtFocusedItemProvider",
    "adsCreateSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsUEditorCrepeCurrentLevelSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          r("AdsMgmtFocusedItemProvider").toFluxSelector(),
          r("adsUEditorCrepeCurrentLevelSelector"),
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
        ],
        function (t, n, r, o, a) {
          var e = t.focusedID,
            i = t.objectLevel;
          if (i != null && e != null) return [e];
          switch (n) {
            case "ad":
              return r;
            case "ad_set":
              return o;
            default:
              return a;
          }
        },
        { name: i.id + ".adsUEditorCrepeCurrentLevelIDsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
