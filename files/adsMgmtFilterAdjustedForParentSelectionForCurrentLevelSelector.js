__d(
  "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
  [
    "AdsMgmtSelectedAncestorIDsSelectors",
    "AdsPEFilterSetToAPIUtil",
    "AdsPEFilterUIStateSelectors",
    "adsCreateStoreSelector",
    "adsMgmtCurrentLevelSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [].concat(
          o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
          o(
            "AdsMgmtSelectedAncestorIDsSelectors",
          ).adsMgmtSelectedAncestorIDsSelector.getStores(),
        ),
        function (t) {
          var e = o(
              "AdsMgmtSelectedAncestorIDsSelectors",
            ).adsMgmtSelectedAncestorIDsSelector(t),
            n = o("AdsPEFilterUIStateSelectors").getFilterSet();
          return o(
            "AdsPEFilterSetToAPIUtil",
          ).computeChildFilterSetWithSelectedParentIDs(n, t, e);
        },
        { name: i.id + ".filterMapAdjustedForParentSelector" },
      ),
      s = r("adsCreateStoreSelector")(
        [].concat(r("adsMgmtCurrentLevelSelector").getStores(), e.getStores()),
        function () {
          var t = r("adsMgmtCurrentLevelSelector")();
          if (!t) return null;
          var n = e(t);
          return n.get(t);
        },
        {
          name:
            i.id +
            ".adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
