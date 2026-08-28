__d(
  "AdsPECampaignVisibleIDsSelectors",
  [
    "AdsMgmtAvailableIDsMigrationSelectors",
    "AdsPECampaignTablePagingSelectors",
    "adsCreateVisibleIDsSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateVisibleIDsSelectors")(
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getCampaignAvailableIDsSelector(),
        r("AdsPECampaignTablePagingSelectors").getRowStartSelector,
        r("AdsPECampaignTablePagingSelectors").getRowEndSelector,
      ),
      s = e;
    l.default = s;
  },
  98,
);
