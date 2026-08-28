__d(
  "Adgroup-dynamic_ad_object_field_error_spec_tier1-resolver",
  [
    "AdgroupDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
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
          : (e = n(
              "AdgroupDynamicAdObjectFieldErrorSpecTier1Resolver.graphql",
            )),
        t,
      );
      return o("AdgroupSpecUtil").coerceDynamicGraphQLSpecTier1ToGraphAPI(r);
    }
    l.dynamic_ad_object_field_error_spec_tier1 = s;
  },
  98,
);
