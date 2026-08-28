__d(
  "AdDeliveryStatusNode-ad_object_spec-resolver",
  [
    "AdDeliveryStatusNodeAdObjectSpecResolver.graphql",
    "AdDeliveryStatusUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdDeliveryStatusNodeAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdDeliveryStatusUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.ad_delivery_status_spec = s;
  },
  98,
);
