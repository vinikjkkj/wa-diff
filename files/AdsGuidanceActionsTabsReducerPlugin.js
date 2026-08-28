__d(
  "AdsGuidanceActionsTabsReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, r;
          return {
            isActionTabShown:
              (e = n.isActionTabShown) != null ? e : t.isActionTabShown,
            scrollTarget:
              n.scrollTarget !== void 0 ? n.scrollTarget : t.scrollTarget,
            selectedTab: (r = n.selectedTab) != null ? r : t.selectedTab,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
