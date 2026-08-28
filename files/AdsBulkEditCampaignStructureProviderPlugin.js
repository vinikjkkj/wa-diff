__d(
  "AdsBulkEditCampaignStructureProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        routeLevelInfo: { ids: r("immutable").List([]), level: "campaign" },
        selectedIDs: r("immutable").Map(),
        selectedTab: "campaign",
      };
    }
    var s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
