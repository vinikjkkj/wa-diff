__d(
  "LSRelayEnvironmentConfig",
  [
    "LSRelayEntryPointQueryPreload",
    "LSRelayEntryPointQueryPreloader",
    "LSRelaySharedServerRequests",
    "ReactiveExecutorImplementation",
    "nullthrows",
    "performance",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r, a, i, l, s) {
      return !o("ReactiveExecutorImplementation")
        .reportsServerResponseEmitted ||
        !Array.isArray(n.metadata.server_variables) ||
        (t == null ? void 0 : t()) !== !0
        ? null
        : o("LSRelaySharedServerRequests").getServerRequestKey(
            e,
            n,
            r,
            a,
            i,
            l,
            s,
          );
    }
    function u(t, n, a, i, l, u, m, p) {
      (i === void 0 && (i = !1), l === void 0 && (l = !1));
      var _ = o("ReactiveExecutorImplementation").createExecutor(n, a, i),
        f = o("LSRelaySharedServerRequests").createSharedServerRequests();
      function g(e, t, n, r, o, a, i, l) {
        return y(e, t, n, r, o, a, i, l, null);
      }
      function h(e, t, n, r, o) {
        return y(e, t, n, null, null, null, null, o, r);
      }
      function y(a, i, g, h, y, C, b, v, S) {
        var R = a.metadata.is_ls_relay_request === !0,
          L = a.metadata.operation;
        if (!R && L == null) {
          if (S != null) return S;
          var E =
            v != null && v.parentOperation == null
              ? s(f, p, a, i, g, h, C, b)
              : null;
          return E != null
            ? d(f, E, c(t, a, i, g, h, y, C, b))
            : t.execute(a, i, g, h, y, C, b, v);
        }
        var k = { kind: "Request", operation: r("nullthrows")(L), params: a };
        return o("relay-runtime").Observable.create(function (d) {
          var R,
            L = S == null && a.id == null && a.text == null,
            E = !1;
          if (S == null && !L && v != null) {
            var I = v.checkOperation,
              T = v.parentOperation;
            if (T != null) {
              if (k.operation.has_server_to_client_resolvers !== !0)
                L = I(T).status === "available";
              else if (
                o("ReactiveExecutorImplementation").supportsStoreBackedS2C &&
                (m == null ? void 0 : m.isEnabled()) === !0
              ) {
                var D = (e || (e = r("performance"))).now(),
                  x = I(T),
                  $ = x.status;
                $ === "available"
                  ? (E = !0)
                  : n == null ||
                    n({
                      endTime: (e || (e = r("performance"))).now(),
                      executionCount: 0,
                      outcome: $,
                      startTime: D,
                      type: "store_backed_s2c",
                    });
              }
            }
          }
          var P =
              l ||
              ((R = k.operation.use_network_normalization_provider) == null
                ? void 0
                : R.get()) === !0 ||
              k.operation.has_server_to_client_resolvers === !0 ||
              k.operation.has_client_to_server_resolvers === !0,
            N = L ? null : s(f, p, a, i, g, h, C, b),
            M =
              N == null
                ? null
                : o("LSRelaySharedServerRequests").createServerRequestShare(
                    f,
                    N,
                    S != null ? S : c(t, a, i, g, h, y, C, b),
                    S != null,
                  );
          if (L && !P) {
            var w = o("relay-runtime").__internal.getOperationVariables(
                k.operation,
                k.params.providedVariables,
                i,
              ),
              A = _.execute(
                o("relay-runtime").createRequestDescriptor(k, w),
              ).subscribe({
                complete: d.complete,
                error: d.error,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null &&
                      ((n.is_client_only = !0), (n.is_ls_relay_response = !0)),
                      d.next(e));
                  }
                },
              }),
              F = A.unsubscribe;
            return function () {
              F();
            };
          }
          var O = o("relay-runtime").__internal.getOperationVariables(
            k.operation,
            k.params.providedVariables,
            i,
          );
          if (P) {
            var B;
            L
              ? (B = o("relay-runtime").Observable.create(function (e) {
                  e.complete();
                }))
              : M != null
                ? (B = o(
                    "LSRelaySharedServerRequests",
                  ).observeServerRequestShare(M))
                : E
                  ? (B = c(t, a, i, g, h, y, C, b))
                  : (B = S != null ? S : t.execute(a, i, g, h, y, C, b));
            var W = _.executeWithNetwork(
                o("relay-runtime").createRequestDescriptor(k, O),
                B,
                {
                  checkOperation: v == null ? void 0 : v.checkOperation,
                  checkOperationWithUnpublished:
                    v == null ? void 0 : v.checkOperationWithUnpublished,
                  network: t,
                  normalizeResponse:
                    o("relay-runtime").__internal.normalizeResponse,
                  onServerResponseEmitted:
                    M == null
                      ? null
                      : function () {
                          return o(
                            "LSRelaySharedServerRequests",
                          ).markServerResponseEmitted(M);
                        },
                  operationLoader: u,
                  storeBackedS2C: E ? m : null,
                },
              ).subscribe({
                complete: d.complete,
                error: d.error,
                next: d.next,
              }),
              q = W.unsubscribe;
            return function () {
              (q(),
                M != null &&
                  o("LSRelaySharedServerRequests").releaseServerRequestShare(
                    M,
                  ));
            };
          }
          var U = !1;
          function V() {
            U ? d.complete() : (U = !0);
          }
          var H = !1,
            G = null,
            z = null;
          function j() {
            H ||
              ((H = !0),
              G == null || G(),
              z == null || z(),
              M != null &&
                o("LSRelaySharedServerRequests").releaseServerRequestShare(M));
          }
          function K(e) {
            H || (d.error(e), j());
          }
          var Q =
              M != null
                ? o("LSRelaySharedServerRequests").observeServerRequestShare(M)
                : S != null
                  ? S
                  : t.execute(a, i, g, h, y, C, b),
            X = Q.subscribe({
              complete: function () {
                (M != null &&
                  o("LSRelaySharedServerRequests").markServerResponseEmitted(M),
                  V());
              },
              error: K,
              next: d.next,
            }),
            Y = X.unsubscribe;
          if (((G = Y), H)) return j;
          var J = _.execute(
              o("relay-runtime").createRequestDescriptor(k, O),
            ).subscribe({
              complete: V,
              error: K,
              next: function (t) {
                if (t.kind !== "WAITING") {
                  var e = t.payload,
                    n = e.extensions;
                  (n != null && (n.is_ls_relay_response = !0), d.next(e));
                }
              },
            }),
            Z = J.unsubscribe;
          return ((z = Z), j);
        });
      }
      var C = r("LSRelayEntryPointQueryPreloader")(g);
      function b(e, t, n, r, o, a, i, l) {
        return C.execute(e, t, n, r, o, a, i, l);
      }
      function v(e, t, n, r, o) {
        return C.executeWithPreloadedSource(e, t, n, function () {
          return h(e, t, n, r, o);
        });
      }
      return {
        UNSTABLE_preloadQueryOnQueryAstLoad: function (t, n) {
          C.preloadQueryOnQueryAstLoad(t, n);
        },
        execute: b,
        executeWithPreloadedSource: v,
      };
    }
    function c(e, t, n, r, a, i, l, s) {
      return o("relay-runtime").Observable.create(function (o) {
        return e.execute(t, n, r, a, i, l, s).subscribe(o);
      });
    }
    function d(e, t, n) {
      return o("relay-runtime").Observable.create(function (r) {
        var a = o("LSRelaySharedServerRequests").createServerRequestShare(
            e,
            t,
            n,
            !1,
          ),
          i = o("LSRelaySharedServerRequests")
            .observeServerRequestShare(a)
            .subscribe(r);
        return function () {
          (i.unsubscribe(),
            o("LSRelaySharedServerRequests").releaseServerRequestShare(a));
        };
      });
    }
    var m = function (t) {
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
      (l.injectLSRelayHandler = u),
      (l.normalizeResponse = m));
  },
  98,
);
