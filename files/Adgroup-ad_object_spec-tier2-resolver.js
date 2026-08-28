__d(
  "Adgroup-ad_object_spec-tier2-resolver",
  ["AdgroupAdObjectSpecTier2Resolver.graphql", "AdgroupSpecUtil", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("AdgroupAdObjectSpecTier2Resolver.graphql")),
        t,
      );
      return o("AdgroupSpecUtil").coerceGraphQLSpecToGraphAPITier2(r);
    }
    l.adgroup_spec_tier2 = s;
  },
  98,
);
