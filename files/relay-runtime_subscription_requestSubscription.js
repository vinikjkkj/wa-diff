__d(
  "relay-runtime/subscription/requestSubscription",
  [
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/RelayModernSelector",
    "warning",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getRequest,
      l = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor,
      s = n("relay-runtime/store/RelayModernSelector").createReaderSelector;
    function u(t, r) {
      var o = e(r.subscription);
      if (o.params.operationKind !== "subscription")
        throw new Error("requestSubscription: Must use Subscription operation");
      var a = r.configs,
        i = r.onCompleted,
        u = r.onError,
        c = r.onNext,
        d = r.variables,
        m = r.cacheConfig,
        p = l(o, d, m);
      n("warning")(
        !(r.updater && a),
        "requestSubscription: Expected only one of `updater` and `configs` to be provided",
      );
      var _ = a
          ? n("relay-runtime/mutations/RelayDeclarativeMutationConfig").convert(
              a,
              o,
              null,
              r.updater,
            )
          : r,
        f = _.updater,
        g = t.executeSubscription({ operation: p, updater: f }).subscribe({
          complete: i,
          error: u,
          next: function (n) {
            if (c != null) {
              var e = p.fragment,
                r;
              if (Array.isArray(n)) {
                var o;
                r =
                  (o = n[0]) == null || (o = o.extensions) == null
                    ? void 0
                    : o.__relay_subscription_root_id;
              } else {
                var a;
                r =
                  (a = n.extensions) == null
                    ? void 0
                    : a.__relay_subscription_root_id;
              }
              typeof r == "string" && (e = s(e.node, r, e.variables, e.owner));
              var i = t.lookup(e).data;
              c(i);
            }
          },
        });
      return { dispose: g.unsubscribe };
    }
    a.exports = u;
  },
  null,
);
