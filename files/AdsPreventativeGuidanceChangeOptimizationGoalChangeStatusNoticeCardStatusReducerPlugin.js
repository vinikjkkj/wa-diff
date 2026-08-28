__d(
  "AdsPreventativeGuidanceChangeOptimizationGoalChangeStatusNoticeCardStatusReducerPlugin",
  ["AdsDeliveryZeroConversionStatusMessageIDs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.campaignIDs;
          if (e.length !== 1) return t;
          var r = e[0];
          return t.get(r) ===
            o("AdsDeliveryZeroConversionStatusMessageIDs")
              .ZeroConversionStatusMessageIDs.USE_CUSTOM_AUDIENCE_SUCCESS
            ? t.withMutations(function (e) {
                return e.set(r, null);
              })
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
