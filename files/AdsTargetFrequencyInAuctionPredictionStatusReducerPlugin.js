__d(
  "AdsTargetFrequencyInAuctionPredictionStatusReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.success == null
            ? t.delete(n.campaignID)
            : t.set(n.campaignID, {
                error: n.error,
                params: n.params,
                success: n.success,
              });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
