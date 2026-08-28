__d(
  "Adgroup-dynamic_ad_object_spec_tier4-resolver",
  [
    "AdgroupDynamicAdObjectSpecTier4Resolver.graphql",
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
          : (e = n("AdgroupDynamicAdObjectSpecTier4Resolver.graphql")),
        t,
      );
      return o("AdgroupSpecUtil").coerceDynamicGraphQLSpecTier4ToGraphAPI(r);
    }
    l.dynamic_ad_object_spec_tier4 = s;
  },
  98,
);
