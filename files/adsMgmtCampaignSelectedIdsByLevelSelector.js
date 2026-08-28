__d(
  "adsMgmtCampaignSelectedIdsByLevelSelector",
  [
    "AdsSelectionLevelSelectors",
    "adsCreateSelector",
    "adsMgmtCampaignIDsFromSelectedParentIDsByLevelSelector",
    "adsMgmtCampaignSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          r("adsMgmtCampaignIDsFromSelectedParentIDsByLevelSelector"),
          o("AdsSelectionLevelSelectors").adsSelectionLevelSelector,
        ],
        function (t, n, r) {
          return r === "ad" ? [] : t.concat(n);
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
