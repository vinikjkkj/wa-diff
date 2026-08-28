__d(
  "AdsMgmtAvailableIDsMigrationSelectors",
  [
    "AdsPEAdgroupAvailableIDStore",
    "AdsPECampaignAvailableIDStore",
    "AdsPECampaignGroupAvailableIDStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("AdsPECampaignGroupAvailableIDStore").getAvailableIDs;
    }
    function s() {
      return r("AdsPECampaignAvailableIDStore").getAvailableIDs;
    }
    function u() {
      return r("AdsPEAdgroupAvailableIDStore").getAvailableIDs;
    }
    function c() {
      return r("AdsPECampaignGroupAvailableIDStore").getAvailableCount;
    }
    function d() {
      return r("AdsPECampaignAvailableIDStore").getAvailableCount;
    }
    function m() {
      return r("AdsPEAdgroupAvailableIDStore").getAvailableCount;
    }
    ((l.getCampaignGroupAvailableIDsSelector = e),
      (l.getCampaignAvailableIDsSelector = s),
      (l.getAdgroupAvailableIDsSelector = u),
      (l.getCampaignGroupAvailableCountSelector = c),
      (l.getCampaignAvailableCountSelector = d),
      (l.getAdgroupAvailableCountSelector = m));
  },
  98,
);
