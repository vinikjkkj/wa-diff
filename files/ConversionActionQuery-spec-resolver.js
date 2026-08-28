__d(
  "ConversionActionQuery-spec-resolver",
  [
    "ConversionActionQuerySpecResolver.graphql",
    "ConversionActionQuerySpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("ConversionActionQuerySpecResolver.graphql")),
        t,
      );
      return o("ConversionActionQuerySpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.conversion_action_query_spec = s;
  },
  98,
);
