__d(
  "AdsObjectLevelToStore",
  [
    "AdsAdgroupCombinedStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupCombinedStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["campaign", r("AdsCampaignGroupCombinedStore")],
        ["ad_set", r("AdsCampaignCombinedStore")],
        ["ad", r("AdsAdgroupCombinedStore")],
      ]),
      s = e;
    l.default = s;
  },
  98,
);
