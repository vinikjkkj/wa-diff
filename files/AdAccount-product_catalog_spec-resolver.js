__d(
  "AdAccount-product_catalog_spec-resolver",
  [
    "AdAccountDpaEligibleProductCatalogListUtil",
    "AdAccountProductCatalogSpecResolver.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdAccountProductCatalogSpecResolver.graphql")),
        t,
      );
      return o(
        "AdAccountDpaEligibleProductCatalogListUtil",
      ).coerceGraphQLSpecToGraphAPI(r);
    }
    l.product_catalog_spec = s;
  },
  98,
);
