__d(
  "getRoasPlusPlusMixVolumeAndValueBulkEditDeliverySpec",
  [
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsBidConstraintsUtils",
    "AdsDeliveryActionTransformers",
    "AdsDeliverySpecReducer",
    "AdsUniformValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.account,
        a = t.objective,
        i = t.promotedObjectType,
        l = e.get("bid_strategy");
      if (
        l instanceof r("AdsUniformValue") &&
        l.getValue() === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
      )
        return null;
      var s = o("AdsDeliverySpecReducer").reduce(
        e,
        o("AdsDeliveryActionTransformers").changeBidConstraints({
          bidConstraints: o(
            "AdsBidConstraintsUtils",
          ).updateRoasAverageFloorInBidConstraints(
            !0,
            r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR,
          ),
        }),
      );
      return o("AdsDeliverySpecReducer").reduce(
        s,
        o("AdsDeliveryActionTransformers").changeBidStrategy({
          account: n,
          bidAmount: null,
          bidStrategy: new (r("AdsUniformValue"))(
            r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
          ),
          objective: a,
          promotedObjectType: i,
          shouldSetDefaultBidAmount: !1,
        }),
      );
    }
    l.getRoasPlusPlusMixVolumeAndValueBulkEditDeliverySpec = e;
  },
  98,
);
