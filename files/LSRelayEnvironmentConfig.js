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
      function u(e, t, n, r, o, a, i, l) {
        return d(e, t, n, r, o, a, i, l, null);
      }
      function c(e, t, n, r, o) {
        return d(e, t, n, null, null, null, null, o, r);
      }
      function d(t, n, a, u, c, d, m, p, _) {
        var f = t.metadata.is_ls_relay_request === !0,
          g = t.metadata.operation;
        if (!f && g == null)
          return _ != null ? _ : e.execute(t, n, a, u, c, d, m, p);
        var h = { kind: "Request", operation: r("nullthrows")(g), params: t };
        return o("relay-runtime").Observable.create(function (r) {
          var f,
            g = _ == null && t.id == null && t.text == null;
          if (_ == null && !g && p != null) {
            var y = p.checkOperation,
              C = p.parentOperation;
            C != null &&
              (g =
                h.operation.has_server_to_client_resolvers !== !0 &&
                y(C).status === "available");
          }
          var b =
            i ||
            ((f = h.operation.use_network_normalization_provider) == null
              ? void 0
              : f.get()) === !0 ||
            h.operation.has_server_to_client_resolvers === !0 ||
            h.operation.has_client_to_server_resolvers === !0;
          if (g && !b) {
            var v = o("relay-runtime").__internal.getOperationVariables(
                h.operation,
                h.params.providedVariables,
                n,
              ),
              S = s
                .execute(o("relay-runtime").createRequestDescriptor(h, v))
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
              R = S.unsubscribe;
            return function () {
              R();
            };
          }
          var L = o("relay-runtime").__internal.getOperationVariables(
            h.operation,
            h.params.providedVariables,
            n,
          );
          if (b) {
            var E = g
                ? o("relay-runtime").Observable.create(function (e) {
                    e.complete();
                  })
                : _ != null
                  ? _
                  : e.execute(t, n, a, u, c, d, m),
              k = s
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(h, L),
                  E,
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
              I = k.unsubscribe;
            return function () {
              return I();
            };
          }
          var T = !1;
          function D() {
            T ? r.complete() : (T = !0);
          }
          var x = !1,
            $ = null,
            P = null;
          function N() {
            x || ((x = !0), $ == null || $(), P == null || P());
          }
          function M(e) {
            x || (r.error(e), N());
          }
          var w = _ != null ? _ : e.execute(t, n, a, u, c, d, m),
            A = w.subscribe({ complete: D, error: M, next: r.next }),
            F = A.unsubscribe;
          if ((($ = F), x)) return N;
          var O = s
              .execute(o("relay-runtime").createRequestDescriptor(h, L))
              .subscribe({
                complete: D,
                error: M,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            B = O.unsubscribe;
          return ((P = B), N);
        });
      }
      return { execute: u, executeWithPreloadedSource: c };
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
