__d(
  "AdTargetSpecification-target_spec-resolver",
  [
    "AdCampaignSpecUtil",
    "AdTargetSpecificationTargetSpecResolver.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdTargetSpecificationTargetSpecResolver.graphql")),
        t,
      );
      return o("AdCampaignSpecUtil").coerceTargeting(r);
    }
    l.target_spec = s;
  },
  98,
);
