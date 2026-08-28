__d(
  "AdsPECampaignTablePagingSelectors",
  ["AdsMgmtAvailableIDsMigrationSelectors", "adsCreateTablePagingSelectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateTablePagingSelectors")(
        "adset_page_id",
        o(
          "AdsMgmtAvailableIDsMigrationSelectors",
        ).getCampaignAvailableCountSelector(),
      ),
      s = e;
    l.default = s;
  },
  98,
);
