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
          var f,
            g = t.id == null && t.text == null;
          if (!g && p != null) {
            var h = p.checkOperation,
              y = p.parentOperation;
            y != null && (g = h(y).status === "available");
          }
          var C =
            i ||
            ((f = _.operation.use_network_normalization_provider) == null
              ? void 0
              : f.get()) === !0 ||
            _.operation.has_server_to_client_resolvers === !0 ||
            _.operation.has_client_to_server_resolvers === !0;
          if (g && !C) {
            var b = o("relay-runtime").__internal.getOperationVariables(
                _.operation,
                _.params.providedVariables,
                n,
              ),
              v = s
                .execute(o("relay-runtime").createRequestDescriptor(_, b))
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
              S = v.unsubscribe;
            return function () {
              S();
            };
          }
          var R = o("relay-runtime").__internal.getOperationVariables(
            _.operation,
            _.params.providedVariables,
            n,
          );
          if (C) {
            var L = g
                ? o("relay-runtime").Observable.create(function (e) {
                    e.complete();
                  })
                : e.execute(t, n, a, u, c, d, m),
              E = s
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(_, R),
                  L,
                  {
                    checkOperation: p == null ? void 0 : p.checkOperation,
                    network: e,
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
              k = E.unsubscribe;
            return function () {
              return k();
            };
          }
          var I = !1;
          function T() {
            I ? r.complete() : (I = !0);
          }
          var D = !1,
            x = null,
            $ = null;
          function P() {
            D || ((D = !0), x == null || x(), $ == null || $());
          }
          function N(e) {
            D || (r.error(e), P());
          }
          var M = e
              .execute(t, n, a, u, c, d, m)
              .subscribe({ complete: T, error: N, next: r.next }),
            w = M.unsubscribe;
          if (((x = w), D)) return P;
          var A = s
              .execute(o("relay-runtime").createRequestDescriptor(_, R))
              .subscribe({
                complete: T,
                error: N,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            F = A.unsubscribe;
          return (($ = F), P);
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
