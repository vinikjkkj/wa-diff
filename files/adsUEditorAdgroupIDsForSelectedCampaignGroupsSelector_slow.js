__d(
  "adsUEditorAdgroupIDsForSelectedCampaignGroupsSelector_slow",
  [
    "AdsMgmtGetTimeUtils",
    "adsCreateStoreSelector",
    "adsUEditorSlowSelectorsLogging",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("qpl")._(41484311, "2605"), r("qpl")._(41484309, "430")],
      s = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.adgroupIDsForSelectedCampaignGroupsSelector;
          return t.getStores();
        },
        function (n) {
          var t = n.adgroupIDsForSelectedCampaignGroupsSelector,
            r = o("AdsMgmtGetTimeUtils").startTimer(
              "adgroupIDsForSelectedCampaignGroupsSelector_slow",
              e,
            ),
            a = t();
          return (
            r(),
            o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogAdgroupIDOverfetching(a)
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupIDsForSelectedCampaignGroupsSelector_slow",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
