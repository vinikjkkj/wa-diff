__d(
  "adsMgmtPagingDataSelector",
  [
    "AdsPEAdgroupTablePagingSelectors",
    "AdsPECampaignGroupTablePagingSelectors",
    "AdsPECampaignTablePagingSelectors",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateThunkSelector",
    "adsMgmtNeedToLoadAllFilteredIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".targetLevelSelector" },
      ),
      u = (e = r("adsCreateThunkSelector"))(
        r("AdsPECampaignGroupTablePagingSelectors").getPageSizeSelector,
      ),
      c = e(r("AdsPECampaignGroupTablePagingSelectors").getCurrentPageSelector),
      d = e(r("AdsPECampaignGroupTablePagingSelectors").getPageCountSelector),
      m = e(r("AdsPECampaignTablePagingSelectors").getCurrentPageSelector),
      p = e(r("AdsPECampaignTablePagingSelectors").getPageCountSelector),
      _ = e(r("AdsPEAdgroupTablePagingSelectors").getCurrentPageSelector),
      f = e(r("AdsPEAdgroupTablePagingSelectors").getPageCountSelector),
      g = r("adsCreateSelector")(
        [u, c, d, m, p, _, f, r("adsMgmtNeedToLoadAllFilteredIDsSelector"), s],
        function (t, n, r, o, a, i, l, s, u) {
          var e = { currentPage: 0, pageCount: 0, pageSize: t() };
          switch (u) {
            case "campaignGroup":
              ((e.currentPage = n()), (e.pageCount = r()));
              break;
            case "campaign":
              ((e.currentPage = o()), (e.pageCount = a()));
              break;
            case "adgroup":
              ((e.currentPage = i()), (e.pageCount = l()));
              break;
          }
          return (
            e.currentPage < 0 && (e.currentPage = 0),
            s && (e.currentPage = e.pageCount),
            e
          );
        },
        { name: i.id + ".adsMgmtPagingDataSelector" },
      ),
      h = g;
    l.default = h;
  },
  98,
);
