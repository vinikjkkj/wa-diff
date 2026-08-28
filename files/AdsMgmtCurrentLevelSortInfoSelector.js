__d(
  "AdsMgmtCurrentLevelSortInfoSelector",
  [
    "AdsPEAdgroupSortLiveSelectors",
    "AdsPECampaignGroupSortLiveSelectors",
    "AdsPECampaignSortLiveSelectors",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsMgmtCurrentLevelSelector",
    "adsPECreativeGetSortLiveInfoSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [].concat(
        o("AdsPECampaignGroupSortLiveSelectors").getSortInfo.getStores(),
        o("AdsPECampaignSortLiveSelectors").getSortInfo.getStores(),
        o("AdsPEAdgroupSortLiveSelectors").getSortInfo.getStores(),
        r("adsPECreativeGetSortLiveInfoSelector").getStores(),
      ),
      u = (e = r("adsCreateThunkSelector"))(
        o("AdsPECampaignGroupSortLiveSelectors").getSortInfo,
      ),
      c = e(o("AdsPECampaignSortLiveSelectors").getSortInfo),
      d = e(o("AdsPEAdgroupSortLiveSelectors").getSortInfo),
      m = e(r("adsPECreativeGetSortLiveInfoSelector")),
      p = r("adsCreateSelector")(
        [r("adsMgmtCurrentLevelSelector"), u, c, d, m],
        function (t, n, r, o, a) {
          return t === "campaignGroup"
            ? n()
            : t === "campaign"
              ? r()
              : t === "adgroup"
                ? o()
                : t === "uniqueAdCreative"
                  ? a()
                  : null;
        },
        { name: i.id + ".adsMgmtCurrentLevelSortInfoSelector" },
      );
    ((l.SORT_STORES = s), (l.adsMgmtCurrentLevelSortInfoSelector = p));
  },
  98,
);
