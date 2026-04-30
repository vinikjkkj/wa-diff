__d(
  "LSRelayEnvironmentConfig",
  [
    "ReactiveQueryExecutionNode_EXPERIMENTAL",
    "ReactiveQueryExecutionStore_EXPERIMENTAL",
    "nullthrows",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      (a === void 0 && (a = !1), i === void 0 && (i = !1));
      var s = new (o("ReactiveQueryExecutionNode_EXPERIMENTAL").Executor)(
        new (r("ReactiveQueryExecutionStore_EXPERIMENTAL"))(t, n, a),
      );
      function u(t, n, a, u, c, d, m, p) {
        if (t.metadata.is_ls_relay_request !== !0)
          return e.execute.apply(null, arguments);
        var _ = {
          kind: "Request",
          operation: r("nullthrows")(t.metadata.operation),
          params: t,
        };
        return o("relay-runtime").Observable.create(function (r) {
          var f = t.id == null && t.text == null;
          if (!f && p != null) {
            var g = p(),
              h = g.status;
            f = h === "available";
          }
          if (f) {
            var y = o("relay-runtime").__internal.getOperationVariables(
                _.operation,
                _.params.providedVariables,
                n,
              ),
              C = s
                .execute(o("relay-runtime").createRequestDescriptor(_, y))
                .subscribe({
                  complete: r.complete,
                  error: r.error,
                  next: function (t) {
                    if (t.kind !== "WAITING") {
                      var e = t.payload,
                        n = e.extensions;
                      (n != null &&
                        ((n.is_client_only = !0),
                        (n.is_ls_relay_response = !0)),
                        r.next(e));
                    }
                  },
                }),
              b = C.unsubscribe;
            return function () {
              b();
            };
          }
          var v = o("relay-runtime").__internal.getOperationVariables(
            _.operation,
            _.params.providedVariables,
            n,
          );
          if (i || _.operation.has_server_to_client_resolvers === !0) {
            var S = s
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(_, v),
                  e.execute(t, n, a, u, c, d, m),
                  {
                    normalizeResponse:
                      o("relay-runtime").__internal.normalizeResponse,
                    operationLoader: l,
                  },
                )
                .subscribe({
                  complete: r.complete,
                  error: r.error,
                  next: r.next,
                }),
              R = S.unsubscribe;
            return function () {
              return R();
            };
          }
          var L = !1;
          function E() {
            L ? r.complete() : (L = !0);
          }
          var k = !1,
            I = null,
            T = null;
          function D() {
            k || ((k = !0), I == null || I(), T == null || T());
          }
          function x(e) {
            k || (r.error(e), D());
          }
          var $ = e
              .execute(t, n, a, u, c, d, m)
              .subscribe({ complete: E, error: x, next: r.next }),
            P = $.unsubscribe;
          if (((I = P), k)) return D;
          var N = s
              .execute(o("relay-runtime").createRequestDescriptor(_, v))
              .subscribe({
                complete: E,
                error: x,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            M = N.unsubscribe;
          return ((T = M), D);
        });
      }
      return { execute: u };
    }
    var s = function (t) {
      var e, n;
      if (((e = t.extensions) == null ? void 0 : e.is_ls_relay_response) !== !0)
        return o("relay-runtime").__internal.normalizeResponse.apply(
          null,
          arguments,
        );
      var r = new (o("relay-runtime").RecordSource)(t.data);
      return {
        errors: [],
        fieldPayloads: [],
        followupPayloads: [],
        incrementalPlaceholders: [],
        isFinal: ((n = t.extensions) == null ? void 0 : n.is_final) === !0,
        source: r,
      };
    };
    ((l.injectLSRelayHandler = e), (l.normalizeResponse = s));
  },
  98,
);
