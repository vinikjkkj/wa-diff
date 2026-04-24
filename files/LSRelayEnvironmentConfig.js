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
    function e(e, t, n, a, i) {
      (a === void 0 && (a = !1), i === void 0 && (i = !1));
      var l = new (o("ReactiveQueryExecutionNode_EXPERIMENTAL").Executor)(
        new (r("ReactiveQueryExecutionStore_EXPERIMENTAL"))(t, n, a),
      );
      function s(t, n, a, s, u, c, d, m) {
        if (t.metadata.is_ls_relay_request !== !0)
          return e.execute.apply(null, arguments);
        var p = {
          kind: "Request",
          operation: r("nullthrows")(t.metadata.operation),
          params: t,
        };
        return o("relay-runtime").Observable.create(function (r) {
          var _ = t.id == null && t.text == null;
          if (!_ && m != null) {
            var f = m(),
              g = f.status;
            _ = g === "available";
          }
          if (_) {
            var h = o("relay-runtime").__internal.getOperationVariables(
                p.operation,
                p.params.providedVariables,
                n,
              ),
              y = l
                .execute(o("relay-runtime").createRequestDescriptor(p, h))
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
              C = y.unsubscribe;
            return function () {
              C();
            };
          }
          var b = o("relay-runtime").__internal.getOperationVariables(
            p.operation,
            p.params.providedVariables,
            n,
          );
          if (i || p.operation.has_server_to_client_resolvers === !0) {
            var v = l
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(p, b),
                  e.execute(t, n, a, s, u, c, d),
                  {
                    normalizeResponse:
                      o("relay-runtime").__internal.normalizeResponse,
                  },
                )
                .subscribe({
                  complete: r.complete,
                  error: r.error,
                  next: r.next,
                }),
              S = v.unsubscribe;
            return function () {
              return S();
            };
          }
          var R = !1;
          function L() {
            R ? r.complete() : (R = !0);
          }
          var E = !1,
            k = null,
            I = null;
          function T() {
            E || ((E = !0), k == null || k(), I == null || I());
          }
          function D(e) {
            E || (r.error(e), T());
          }
          var x = e
              .execute(t, n, a, s, u, c, d)
              .subscribe({ complete: L, error: D, next: r.next }),
            $ = x.unsubscribe;
          if (((k = $), E)) return T;
          var P = l
              .execute(o("relay-runtime").createRequestDescriptor(p, b))
              .subscribe({
                complete: L,
                error: D,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            N = P.unsubscribe;
          return ((I = N), T);
        });
      }
      return { execute: s };
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
