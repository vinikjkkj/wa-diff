__d(
  "AdsObjectLevelToBulkEditStore",
  [
    "AdsAdgroupBulkEditStore",
    "AdsCampaignBulkEditStore",
    "AdsCampaignGroupBulkEditStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["campaign", r("AdsCampaignGroupBulkEditStore")],
        ["ad_set", r("AdsCampaignBulkEditStore")],
        ["ad", r("AdsAdgroupBulkEditStore")],
      ]),
      s = e;
    l.default = s;
  },
  98,
);
