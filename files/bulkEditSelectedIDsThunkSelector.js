__d(
  "bulkEditSelectedIDsThunkSelector",
  [
    "AdsBulkEditCampaignStructureProvider",
    "AdsObjectTypeUtils",
    "adsCreateStoreSelector",
    "adsCreateThunkSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsBulkEditCampaignStructureProvider").toFluxStore(),
      s = r("adsCreateStoreSelector")(
        [e],
        function (n) {
          var t = e.getState(),
            a = t.selectedIDs,
            i = t.selectedTab;
          return n !== o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(i)
            ? r("immutable").List([])
            : a.get(i) || r("immutable").List([]);
        },
        { name: i.id + ".getBulkEditSelectedIDsSelector" },
      ),
      u = r("adsCreateThunkSelector")(s);
    l.default = u;
  },
  98,
);
