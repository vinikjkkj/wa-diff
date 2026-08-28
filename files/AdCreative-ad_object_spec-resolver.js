__d(
  "AdCreative-ad_object_spec-resolver",
  [
    "AdCreativeAdObjectSpecResolver.graphql",
    "AdCreativeSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("AdCreativeAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdCreativeSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.adgroup_creative_spec = s;
  },
  98,
);
