__d(
  "performanceSummarySelectedAdObjectsSelector",
  [
    "AdsCampaignCombinedListStore",
    "adsCreateSelector",
    "adsInsightsAccountInfoSelector",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsPEManageAdsSectionSelector",
    "performanceSummarySelectedAdObjectsSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          o("adsMgmtAdgroupSelectedIdsSelector")
            .adsMgmtAdgroupSelectedIdsSelector,
          r("adsPEManageAdsSectionSelector"),
          r("adsInsightsAccountInfoSelector"),
        ],
        function (t, n, a, i, l) {
          var e,
            s,
            u = l.getValue(),
            c =
              (e = r("AdsCampaignCombinedListStore")
                .getCampaignIDs(
                  (s = u == null ? void 0 : u.accountID) != null ? s : "",
                  t,
                )
                .getValue()) != null
                ? e
                : [];
          return o(
            "performanceSummarySelectedAdObjectsSelectorUtils",
          ).performanceSummarySelectedAdObjects(t, n, a, i, c);
        },
        { name: i.id + ".performanceSummarySelectedAdObjectsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
