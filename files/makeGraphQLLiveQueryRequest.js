__d(
  "makeGraphQLLiveQueryRequest",
  ["RealtimeGraphQLRequest"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "GRAPHQL";
    function s(t) {
      var n = t.access_token,
        o = t.actor_id,
        a = t.doc_id,
        i = t.enable_canonical_naming,
        l = t.graphiql_impersonation,
        s = t.graphiql_sandbox,
        u = t.instrumentation_data,
        c = t.last_response_digest,
        d = t.logging_context,
        m = t.oncall,
        p = t.operation_name,
        _ = t.product,
        f = t.resumption_group_name,
        g = t.variables,
        h = e + ":" + p,
        y = { method: h, doc_id: a, body: { variables: g != null ? g : {} } };
      s != null && (y = babelHelpers.extends({}, y, { graphiql_sandbox: s }));
      var C = {};
      if (
        (c != null &&
          (C = babelHelpers.extends({}, C, { last_response_digest: c })),
        o != null)
      ) {
        var b = o;
        C = babelHelpers.extends({}, C, { actor_id: o, page_id: b });
      }
      return (
        d != null && (C = babelHelpers.extends({}, C, { logging_context: d })),
        n != null && (C = babelHelpers.extends({}, C, { access_token: n })),
        l != null &&
          (C = babelHelpers.extends({}, C, { graphiql_impersonation: l })),
        i === !0 &&
          (C = babelHelpers.extends({}, C, { enable_canonical_naming: !0 })),
        f != null &&
          (C = babelHelpers.extends({}, C, { resumption_group_name: f })),
        m != null && (C = babelHelpers.extends({}, C, { oncall: m })),
        _ != null && (C = babelHelpers.extends({}, C, { product: _ })),
        (y = babelHelpers.extends({}, y, { extra_headers: C })),
        u != null &&
          (y = babelHelpers.extends({}, y, { instrumentation_data: u })),
        new (r("RealtimeGraphQLRequest"))(y)
      );
    }
    i.exports = s;
  },
  34,
);
