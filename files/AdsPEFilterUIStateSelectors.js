__d(
  "AdsPEFilterUIStateSelectors",
  [
    "AdsPEFilterUIStateProvider",
    "AdsPEFilterUIStateSelectorsUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsPEFilterUIStateProvider").toFluxStore()],
        function () {
          return r("AdsPEFilterUIStateProvider")().filterSet;
        },
        { name: i.id + ".getRawFilterSet" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return o("AdsPEFilterUIStateSelectorsUtils").getFilterSetLogic(t);
        },
        { name: i.id + ".getFilterSet" },
      ),
      u = r("adsCreateSelector")(
        [s],
        function (t) {
          var e, n;
          return (
            ((e = t == null || (n = t.values) == null ? void 0 : n.length) !=
            null
              ? e
              : 0) > 0
          );
        },
        { name: i.id + ".hasFilters" },
      ),
      c = r("adsCreateSelector")(
        [s],
        function (t) {
          if (t == null || t.values.length !== 1) return !1;
          var e = t.values[0];
          return e.getField().name === "CAMPAIGN_GROUP_CHANGED";
        },
        { name: i.id + ".hasOnlyCampaignGroupChangedFilter" },
      );
    ((l.getRawFilterSet = e),
      (l.getFilterSet = s),
      (l.hasFilters = u),
      (l.hasOnlyCampaignGroupChangedFilter = c));
  },
  98,
);
