__d(
  "AdsPECampaignGroupTablePagingSelectors",
  ["AdsMgmtAvailableIDsMigrationSelectors", "adsCreateTablePagingSelectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateTablePagingSelectors")(
        "campaign_page_id",
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getCampaignGroupAvailableCountSelector(),
      ),
      s = e;
    l.default = s;
  },
  98,
);
