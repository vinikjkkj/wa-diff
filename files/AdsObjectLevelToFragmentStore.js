__d(
  "AdsObjectLevelToFragmentStore",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["campaign", r("AdsCampaignGroupDraftFragmentStore")],
        ["ad_set", r("AdsCampaignDraftFragmentStore")],
        ["ad", r("AdsAdgroupDraftFragmentStore")],
      ]),
      s = e;
    l.default = s;
  },
  98,
);
