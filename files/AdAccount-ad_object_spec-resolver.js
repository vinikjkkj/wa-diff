__d(
  "AdAccount-ad_object_spec-resolver",
  ["AdAccountAdObjectSpecResolver.graphql", "AdAccountSpecUtils", "RelayHooks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("AdAccountAdObjectSpecResolver.graphql")),
        t,
      );
      return o("AdAccountSpecUtils").coerceGraphQLSpecToGraphAPI(r);
    }
    l.adaccount_spec = s;
  },
  98,
);
