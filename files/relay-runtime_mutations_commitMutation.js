__d(
  "relay-runtime/mutations/commitMutation",
  [
    "invariant",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/mutations/validateMutation",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/isRelayModernEnvironment",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getRequest,
      s = n("relay-runtime/store/ClientID").generateUniqueClientID,
      u = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor;
    function c(t, r) {
      n("relay-runtime/store/isRelayModernEnvironment")(t) || l(0, 18234);
      var o = e(r.mutation);
      if (o.params.operationKind !== "mutation")
        throw new Error("commitMutation: Expected mutation operation");
      if (o.kind !== "Request")
        throw new Error(
          "commitMutation: Expected mutation to be of type request",
        );
      var a = r.optimisticResponse,
        i = r.optimisticUpdater,
        c = r.updater,
        d = r.configs,
        m = r.cacheConfig,
        p = r.onError,
        _ = r.onUnsubscribe,
        f = r.variables,
        g = r.uploadables,
        h = u(o, f, m, s());
      if (
        (typeof a == "function" &&
          ((a = a()),
          n("warning")(
            !1,
            "commitMutation: Expected `optimisticResponse` to be an object, received a function.",
          )),
        d)
      ) {
        var y = n(
          "relay-runtime/mutations/RelayDeclarativeMutationConfig",
        ).convert(d, o, i, c);
        ((i = y.optimisticUpdater), (c = y.updater));
      }
      var C = [],
        b = t
          .executeMutation({
            operation: h,
            optimisticResponse: a,
            optimisticUpdater: i,
            updater: c,
            uploadables: g,
          })
          .subscribe({
            complete: function () {
              var e = r.onCompleted;
              if (e) {
                var n = t.lookup(h.fragment);
                e(n.data, C.length !== 0 ? C : null);
              }
            },
            error: p,
            next: function (t) {
              (Array.isArray(t)
                ? t.forEach(function (e) {
                    e.errors && C.push.apply(C, e.errors);
                  })
                : t.errors && C.push.apply(C, t.errors),
                r.onNext == null || r.onNext());
            },
            unsubscribe: _,
          });
      return { dispose: b.unsubscribe };
    }
    a.exports = c;
  },
  null,
);
