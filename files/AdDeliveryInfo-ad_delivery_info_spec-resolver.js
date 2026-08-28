__d(
  "AdDeliveryInfo-ad_delivery_info_spec-resolver",
  [
    "AdDeliveryInfoAdDeliveryInfoSpecResolver.graphql",
    "AdDeliveryInfoUtils",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdDeliveryInfoAdDeliveryInfoSpecResolver.graphql")),
        t,
      );
      return o("AdDeliveryInfoUtils").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_delivery_info_spec = s;
  },
  98,
);
