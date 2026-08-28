__d(
  "AdsPENavSectionToAvailableIDStoreMap",
  [
    "AdsPEAdgroupAvailableIDStore",
    "AdsPECampaignAvailableIDStore",
    "AdsPECampaignGroupAvailableIDStore",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map();
    function s(t) {
      return e.get(t, null);
    }
    function u() {
      return e.toArray().filter(Boolean);
    }
    ((e = r("immutable").Map([
      ["L1", r("AdsPEAdgroupAvailableIDStore")],
      ["L2", r("AdsPECampaignAvailableIDStore")],
      ["L3", r("AdsPECampaignGroupAvailableIDStore")],
      ["CAMPAIGN_OVERVIEW", r("AdsPECampaignGroupAvailableIDStore")],
    ])),
      (l.get = s),
      (l.toArray = u));
  },
  98,
);
