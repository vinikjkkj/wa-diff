__d(
  "AdsMgmtSelectedAncestorIDsSelectors",
  [
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [],
      function (t) {
        return t;
      },
      { name: i.id + ".targetLevelSelector" },
    );
    function s(e, t, n, r) {
      var o = new Map();
      e: return e === "uniqueAdCreative"
        ? r.length > 0
          ? (o.set("adgroup", r), o)
          : n.length > 0
            ? (o.set("campaign", n), o)
            : (t.length > 0 && o.set("campaignGroup", t), o)
        : e === "adgroup"
          ? n.length > 0
            ? (o.set("campaign", n), o)
            : (t.length > 0 && o.set("campaignGroup", t), o)
          : (e === "campaign" && t.length > 0 && o.set("campaignGroup", t), o);
    }
    var u = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          e,
        ],
        function (t, n, r, o) {
          return s(o, t, n, r);
        },
        { name: i.id + ".adsMgmtSelectedAncestorIDsSelector" },
      ),
      c = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          e,
        ],
        function (t, n, r, o) {
          return s(o, t, n, r);
        },
        { name: i.id + ".adsMgmtRelevantSelectionsMapSelector" },
      );
    ((l.adsMgmtSelectedAncestorIDsSelector = u),
      (l.adsMgmtRelevantSelectionsMapSelector = c));
  },
  98,
);
