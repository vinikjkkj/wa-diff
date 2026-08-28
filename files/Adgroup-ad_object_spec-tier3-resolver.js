__d(
  "Adgroup-ad_object_spec-tier3-resolver",
  ["AdgroupAdObjectSpecTier3Resolver.graphql", "AdgroupSpecUtil", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("AdgroupAdObjectSpecTier3Resolver.graphql")),
        t,
      );
      return o("AdgroupSpecUtil").coerceGraphQLSpecToGraphAPITier3(r);
    }
    l.adgroup_spec_tier3 = s;
  },
  98,
);
