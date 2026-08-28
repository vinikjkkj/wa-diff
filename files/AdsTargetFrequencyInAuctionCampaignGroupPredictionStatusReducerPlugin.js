__d(
  "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.success == null
            ? t.delete(n.campaignGroupID)
            : t.set(n.campaignGroupID, {
                error: n.error,
                params: n.params,
                prediction_id: n.prediction_id,
                success: n.success,
              });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
