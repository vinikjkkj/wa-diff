__d(
  "Adgroup-dynamic_ad_object_spec_tier2-resolver",
  [
    "AdgroupDynamicAdObjectSpecTier2Resolver.graphql",
    "AdgroupSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdgroupDynamicAdObjectSpecTier2Resolver.graphql")),
        t,
      );
      return o("AdgroupSpecUtil").coerceDynamicGraphQLSpecTier2ToGraphAPI(r);
    }
    l.dynamic_ad_object_spec_tier2 = s;
  },
  98,
);
