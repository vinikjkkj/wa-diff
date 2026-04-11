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
    function e(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = new (o("ReactiveQueryExecutionNode_EXPERIMENTAL").Executor)(
        new (r("ReactiveQueryExecutionStore_EXPERIMENTAL"))(t, n, a),
      );
      function l(t, n, a, l, s, u, c, d) {
        if (t.metadata.is_ls_relay_request !== !0)
          return e.execute.apply(null, arguments);
        var m = {
          kind: "Request",
          operation: r("nullthrows")(t.metadata.operation),
          params: t,
        };
        return o("relay-runtime").Observable.create(function (r) {
          var p = t.id == null && t.text == null;
          if (!p && d != null) {
            var _ = d(),
              f = _.status;
            p = f === "available";
          }
          if (p) {
            var g = o("relay-runtime").__internal.getOperationVariables(
                m.operation,
                m.params.providedVariables,
                n,
              ),
              h = i
                .execute(o("relay-runtime").createRequestDescriptor(m, g))
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
              y = h.unsubscribe;
            return function () {
              y();
            };
          }
          var C = !1;
          function b() {
            C ? r.complete() : (C = !0);
          }
          var v = !1,
            S = null,
            R = null;
          function L() {
            v || ((v = !0), S == null || S(), R == null || R());
          }
          function E(e) {
            v || (r.error(e), L());
          }
          var k = e
              .execute(t, n, a, l, s, u, c)
              .subscribe({ complete: b, error: E, next: r.next }),
            I = k.unsubscribe;
          if (((S = I), v)) return L;
          var T = o("relay-runtime").__internal.getOperationVariables(
              m.operation,
              m.params.providedVariables,
              n,
            ),
            D = i
              .execute(o("relay-runtime").createRequestDescriptor(m, T))
              .subscribe({
                complete: r.complete,
                error: E,
                next: function (t) {
                  if (t.kind !== "WAITING") {
                    var e = t.payload,
                      n = e.extensions;
                    (n != null && (n.is_ls_relay_response = !0), r.next(e));
                  }
                },
              }),
            x = D.unsubscribe;
          return ((R = x), L);
        });
      }
      return { execute: l };
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
