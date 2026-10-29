__d(
  "LSRelayEnvironmentConfig",
  [
    "LSRelayEntryPointQueryPreload",
    "LSRelayEntryPointQueryPreloader",
    "ReactiveExecutorImplementation",
    "nullthrows",
    "performance",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i, l, s, u) {
      (i === void 0 && (i = !1), l === void 0 && (l = !1));
      var c = o("ReactiveExecutorImplementation").createExecutor(n, a, i);
      function d(e, t, n, r, o, a, i, l) {
        return p(e, t, n, r, o, a, i, l, null);
      }
      function m(e, t, n, r, o) {
        return p(e, t, n, null, null, null, null, o, r);
      }
      function p(a, i, d, m, p, _, f, g, h) {
        var y = a.metadata.is_ls_relay_request === !0,
          C = a.metadata.operation;
        if (!y && C == null)
          return h != null ? h : t.execute(a, i, d, m, p, _, f, g);
        var b = { kind: "Request", operation: r("nullthrows")(C), params: a };
        return o("relay-runtime").Observable.create(function (y) {
          var C,
            v = h == null && a.id == null && a.text == null,
            S = !1;
          if (h == null && !v && g != null) {
            var R = g.checkOperation,
              L = g.parentOperation;
            if (L != null) {
              if (b.operation.has_server_to_client_resolvers !== !0)
                v = R(L).status === "available";
              else if (
                o("ReactiveExecutorImplementation").supportsStoreBackedS2C &&
                (u == null ? void 0 : u.isEnabled()) === !0
              ) {
                var E = (e || (e = r("performance"))).now(),
                  k = R(L),
                  I = k.status;
                I === "available"
                  ? (S = !0)
                  : n == null ||
                    n({
                      endTime: (e || (e = r("performance"))).now(),
                      executionCount: 0,
                      outcome: I,
                      startTime: E,
                      type: "store_backed_s2c",
                    });
              }
            }
          }
          var T =
            l ||
            ((C = b.operation.use_network_normalization_provider) == null
              ? void 0
              : C.get()) === !0 ||
            b.operation.has_server_to_client_resolvers === !0 ||
            b.operation.has_client_to_server_resolvers === !0;
          if (v && !T) {
            var D = o("relay-runtime").__internal.getOperationVariables(
                b.operation,
                b.params.providedVariables,
                i,
              ),
              x = c
                .execute(o("relay-runtime").createRequestDescriptor(b, D))
                .subscribe({
                  complete: y.complete,
                  error: y.error,
                  next: function (t) {
                    if (t.kind !== "WAITING") {
                      var e = t.payload,
                        n = e.extensions;
                      (n != null &&
                        ((n.is_client_only = !0),
                        (n.is_ls_relay_response = !0)),
                        y.next(e));
                    }
                  },
                }),
              $ = x.unsubscribe;
            return function () {
              $();
            };
          }
          var P = o("relay-runtime").__internal.getOperationVariables(
            b.operation,
            b.params.providedVariables,
            i,
          );
          if (T) {
            var N;
            v
              ? (N = o("relay-runtime").Observable.create(function (e) {
                  e.complete();
                }))
              : S
                ? (N = o("relay-runtime").Observable.create(function (e) {
                    return t.execute(a, i, d, m, p, _, f).subscribe(e);
                  }))
                : (N = h != null ? h : t.execute(a, i, d, m, p, _, f));
            var M = c
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(b, P),
                  N,
                  {
                    checkOperation: g == null ? void 0 : g.checkOperation,
                    network: t,
                    normalizeResponse:
                      o("relay-runtime").__internal.normalizeResponse,
                    operationLoader: s,
                    storeBackedS2C: S ? u : null,
                  },
                )
                .subscribe({
                  complete: y.complete,
                  error: y.error,
                  next: y.next,
                }),
              w = M.unsubscribe;
            return function () {
              return w();
            };
          }
          var A = !1;
          function F() {
            A ? y.complete() : (A = !0);
          }
          var O = !1,
            B = null,
            W = null;
          function q() {
            O || ((O = !0), B == null || B(), W == null || W());
          }
          function U(e) {
            O || (y.error(e), q());
          }
          var V = h != null ? h : t.execute(a, i, d, m, p, _, f),
            H = V.subscribe({ complete: F, error: U, next: y.next }),
            G = H.unsubscribe;
          if (((B = G), O)) return q;
          var z = c
              .execute(o("relay-runtime").createRequestDescriptor(b, P))
              .subscribe({
                complete: F,
                error: U,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), y.next(e));
                  }
                },
              }),
            j = z.unsubscribe;
          return ((W = j), q);
        });
      }
      var _ = r("LSRelayEntryPointQueryPreloader")(d);
      function f(e, t, n, r, o, a, i, l) {
        return _.execute(e, t, n, r, o, a, i, l);
      }
      function g(e, t, n, r, o) {
        return _.executeWithPreloadedSource(e, t, n, function () {
          return m(e, t, n, r, o);
        });
      }
      return {
        UNSTABLE_preloadQueryOnQueryAstLoad: function (t, n) {
          _.preloadQueryOnQueryAstLoad(t, n);
        },
        execute: f,
        executeWithPreloadedSource: g,
      };
    }
    var u = function (t) {
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
    ((l.preloadQueryOnQueryAstLoad = o(
      "LSRelayEntryPointQueryPreload",
    ).preloadQueryOnQueryAstLoad),
      (l.injectLSRelayHandler = s),
      (l.normalizeResponse = u));
  },
  98,
);
