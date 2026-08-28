__d(
  "Adgroup-ad_object_spec_tier1_v2-resolver",
  [
    "AdgroupAdObjectSpecTier1V2Resolver.graphql",
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
          : (e = n("AdgroupAdObjectSpecTier1V2Resolver.graphql")),
        t,
      );
      return o("AdgroupSpecUtil").coerceGraphQLSpecToGraphAPITier1V2(r);
    }
    l.adgroup_spec_tier1_v2 = s;
  },
  98,
);
