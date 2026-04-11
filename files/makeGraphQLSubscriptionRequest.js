__d(
  "makeGraphQLSubscriptionRequest",
  ["RealtimeGraphQLRequest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.doc_id,
        n = e.enable_canonical_naming,
        o = e.graphiql_impersonation,
        a = e.graphiql_sandbox,
        i = e.instrumentation_data,
        l = e.is_distillery,
        s = e.page_id,
        u = e.product,
        c = e.resumption_group_name,
        d = e.routing_hint,
        m = e.streamOptions,
        p = e.usecase,
        _ = e.variables,
        f = l === !0 ? "IGGQLS" : "FBGQLS",
        g = {
          method: p == null ? f : f + ":" + p.toUpperCase(),
          doc_id: t,
          body: _,
        };
      a != null && (g = babelHelpers.extends({}, g, { graphiql_sandbox: a }));
      var h = {};
      return (
        s != null &&
          ((h = h || {}), (h = babelHelpers.extends({}, h, { page_id: s }))),
        o != null &&
          ((h = h || {}),
          (h = babelHelpers.extends({}, h, { graphiql_impersonation: o }))),
        n === !0 &&
          ((h = h || {}),
          (h = babelHelpers.extends({}, h, { enable_canonical_naming: !0 }))),
        c != null &&
          (h = babelHelpers.extends({}, h, { resumption_group_name: c })),
        d != null && (h = babelHelpers.extends({}, h, { routing_hint: d })),
        u != null && (h = babelHelpers.extends({}, h, { product: u })),
        h != null && (g = babelHelpers.extends({}, g, { extra_headers: h })),
        i != null &&
          (g = babelHelpers.extends({}, g, { instrumentation_data: i })),
        m != null && (g = babelHelpers.extends({}, g, { options: m })),
        new (r("RealtimeGraphQLRequest"))(g)
      );
    }
    l.default = e;
  },
  98,
);
