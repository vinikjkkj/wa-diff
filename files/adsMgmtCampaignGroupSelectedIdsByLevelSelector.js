__d(
  "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
  [
    "AdsSelectionLevelSelectors",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("AdsSelectionLevelSelectors").adsSelectionLevelSelector,
        ],
        function (t, n) {
          return n === "ad" || n === "ad_set" ? [] : t;
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
