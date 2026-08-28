__d(
  "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "adsCreateSelector",
    "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore
            .getForCampaignsSelector,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (t, n) {
          return o(
            "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelectorUtils",
          ).adsMgmtGetChildrenAdgroupIDsForCampaignIDsMap(t, n);
        },
        {
          name: i.id + ".adsMgmtGetChildrenAdgroupIDsForCampaignIDsMapSelector",
        },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return o(
            "adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelectorUtils",
          ).adsMgmtGetChildrenAdgroupIDsForCampaignIDs(t);
        },
        { name: i.id + ".adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector" },
      );
    ((l.adsMgmtGetChildrenAdgroupIDsForCampaignIDsMapSelector = e),
      (l.adsMgmtGetChildrenAdgroupIDsForCampaignIDsSelector = s));
  },
  98,
);
