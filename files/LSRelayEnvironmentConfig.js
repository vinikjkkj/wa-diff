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
    function e(e, t, n, a, i, l, s) {
      (a === void 0 && (a = !1), i === void 0 && (i = !1));
      var u = new (o("ReactiveQueryExecutionNode_EXPERIMENTAL").Executor)(
        new (r("ReactiveQueryExecutionStore_EXPERIMENTAL"))(t, n, a),
      );
      function c(t, n, a, c, d, m, p, _) {
        if (t.metadata.is_ls_relay_request !== !0)
          return e.execute.apply(null, arguments);
        var f = {
          kind: "Request",
          operation: r("nullthrows")(t.metadata.operation),
          params: t,
        };
        return o("relay-runtime").Observable.create(function (r) {
          var g,
            h = t.id == null && t.text == null;
          if (!h && _ != null) {
            var y = _(),
              C = y.status;
            h = C === "available";
          }
          var b =
            i ||
            ((g = f.operation.use_network_normalization_provider) == null
              ? void 0
              : g.get()) === !0 ||
            f.operation.has_server_to_client_resolvers === !0 ||
            f.operation.has_client_to_server_resolvers === !0;
          if (h && !b) {
            var v = o("relay-runtime").__internal.getOperationVariables(
                f.operation,
                f.params.providedVariables,
                n,
              ),
              S = u
                .execute(o("relay-runtime").createRequestDescriptor(f, v))
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
            f.operation,
            f.params.providedVariables,
            n,
          );
          if (b) {
            var E = h
                ? o("relay-runtime").Observable.create(function (e) {
                    e.complete();
                  })
                : e.execute(t, n, a, c, d, m, p),
              k =
                s != null
                  ? function (e, t) {
                      var n = s.current;
                      if (n == null) return !1;
                      var r = o("relay-runtime").createOperationDescriptor(
                        e,
                        t,
                      );
                      return n.check(r).status === "available";
                    }
                  : void 0,
              I = u
                .executeWithNetwork(
                  o("relay-runtime").createRequestDescriptor(f, L),
                  E,
                  {
                    checkAvailability: k,
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
              T = I.unsubscribe;
            return function () {
              return T();
            };
          }
          var D = !1;
          function x() {
            D ? r.complete() : (D = !0);
          }
          var $ = !1,
            P = null,
            N = null;
          function M() {
            $ || (($ = !0), P == null || P(), N == null || N());
          }
          function w(e) {
            $ || (r.error(e), M());
          }
          var A = e
              .execute(t, n, a, c, d, m, p)
              .subscribe({ complete: x, error: w, next: r.next }),
            F = A.unsubscribe;
          if (((P = F), $)) return M;
          var O = u
              .execute(o("relay-runtime").createRequestDescriptor(f, L))
              .subscribe({
                complete: x,
                error: w,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            B = O.unsubscribe;
          return ((N = B), M);
        });
      }
      return { execute: c };
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
