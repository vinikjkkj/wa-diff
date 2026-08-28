__d(
  "AdsReviewViewQuickSwitchToEditFieldDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.adObjectLevel || t.adObjectLevel;
          return {
            adObjectLevel: e,
            inReviewMode: n.inReviewMode,
            quickSwitchFieldPath: n.quickSwitchFieldPath,
            isUnifiedTestVariation: n.isUnifiedTestVariation,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
