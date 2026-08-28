__d(
  "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
  [
    "AdsAccountStore",
    "AdsCampaignCombinedListStore",
    "adsCreateSelector",
    "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelectorUtils",
    "adsStoreFlattenLists",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsCampaignCombinedListStore").getForCampaignGroupsSelector,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (t, n) {
          return o(
            "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelectorUtils",
          ).adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsMap(t, n);
        },
        {
          name:
            i.id +
            ".adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsMapSelector",
        },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return function (e) {
            var n = t(e);
            return r("adsStoreFlattenLists")(n);
          };
        },
        {
          name:
            i.id + ".adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
        },
      );
    ((l.adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsMapSelector = e),
      (l.adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector = s));
  },
  98,
);
