__d(
  "makeGraphQLLiveQueryRequest",
  ["RealtimeGraphQLRequest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "FBLQ",
      s = "GRAPHQL";
    function u(t) {
      var n = t.access_token,
        o = t.actor_id,
        a = t.config_id,
        i = t.doc_id,
        l = t.enable_canonical_naming,
        u = t.graphiql_impersonation,
        c = t.graphiql_sandbox,
        d = t.instrumentation_data,
        m = t.last_response_digest,
        p = t.logging_context,
        _ = t.oncall,
        f = t.operation_name,
        g = t.product,
        h = t.resumption_group_name,
        y = t.variables,
        C = s + ":" + f;
      a != null && a !== "" && (C = e + ":" + a);
      var b = { method: C, doc_id: i, body: { variables: y != null ? y : {} } };
      c != null && (b = babelHelpers.extends({}, b, { graphiql_sandbox: c }));
      var v = {};
      if (
        (m != null &&
          (v = babelHelpers.extends({}, v, { last_response_digest: m })),
        o != null)
      ) {
        var S = o;
        v = babelHelpers.extends({}, v, { actor_id: o, page_id: S });
      }
      return (
        p != null && (v = babelHelpers.extends({}, v, { logging_context: p })),
        n != null && (v = babelHelpers.extends({}, v, { access_token: n })),
        u != null &&
          (v = babelHelpers.extends({}, v, { graphiql_impersonation: u })),
        l === !0 &&
          (v = babelHelpers.extends({}, v, { enable_canonical_naming: !0 })),
        h != null &&
          (v = babelHelpers.extends({}, v, { resumption_group_name: h })),
        _ != null && (v = babelHelpers.extends({}, v, { oncall: _ })),
        g != null && (v = babelHelpers.extends({}, v, { product: g })),
        (b = babelHelpers.extends({}, b, { extra_headers: v })),
        d != null &&
          (b = babelHelpers.extends({}, b, { instrumentation_data: d })),
        new (r("RealtimeGraphQLRequest"))(b)
      );
    }
    i.exports = u;
  },
  34,
);
