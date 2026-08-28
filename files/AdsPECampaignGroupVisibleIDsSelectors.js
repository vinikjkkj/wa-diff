__d(
  "AdsPECampaignGroupVisibleIDsSelectors",
  [
    "AdsMgmtAvailableIDsMigrationSelectors",
    "AdsPECampaignGroupTablePagingSelectors",
    "adsCreateVisibleIDsSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateVisibleIDsSelectors")(
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getCampaignGroupAvailableIDsSelector(),
        r("AdsPECampaignGroupTablePagingSelectors").getRowStartSelector,
        r("AdsPECampaignGroupTablePagingSelectors").getRowEndSelector,
      ),
      s = e;
    l.default = s;
  },
  98,
);
