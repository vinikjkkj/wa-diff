__d(
  "relay-runtime/mutations/applyOptimisticMutation",
  [
    "invariant",
    "relay-runtime/mutations/RelayDeclarativeMutationConfig",
    "relay-runtime/query/GraphQLTag",
    "relay-runtime/store/RelayModernOperationDescriptor",
    "relay-runtime/store/isRelayModernEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/query/GraphQLTag").getRequest,
      s = n(
        "relay-runtime/store/RelayModernOperationDescriptor",
      ).createOperationDescriptor;
    function u(t, r) {
      n("relay-runtime/store/isRelayModernEnvironment")(t) || l(0, 18234);
      var o = e(r.mutation);
      if (o.params.operationKind !== "mutation")
        throw new Error("commitMutation: Expected mutation operation");
      var a = r.optimisticUpdater,
        i = r.configs,
        u = r.optimisticResponse,
        c = r.variables,
        d = s(o, c);
      if (i) {
        var m = n(
          "relay-runtime/mutations/RelayDeclarativeMutationConfig",
        ).convert(i, o, a);
        a = m.optimisticUpdater;
      }
      return t.applyMutation({ operation: d, response: u, updater: a });
    }
    a.exports = u;
  },
  null,
);
