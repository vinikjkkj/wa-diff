__d(
  "AdsUEditorCampaignTargetFrequencyInAuctionClearPredictionStatusReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignIDs,
            r = n.frequencyControlType,
            o = t;
          for (var a of e) {
            var i = r === "CAP";
            i && (o = o.delete(a));
          }
          return o;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
