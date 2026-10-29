__d(
  "relay-runtime/store/cloneRelayHandleSourceField",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/cloneRelayHandleSourceFieldPerf",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/util/RelayConcreteNode").LINKED_FIELD,
      u = n("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function c(t, r, o) {
      if (n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS)
        return n("relay-runtime/store/cloneRelayHandleSourceFieldPerf")(
          t,
          r,
          o,
        );
      var a = r.find(function (r) {
        return (
          r.kind === s &&
          r.name === t.name &&
          r.alias === t.alias &&
          (e || (e = n("areEqual")))(r.args, t.args)
        );
      });
      (a && a.kind === s) || l(0, 2847, t.handle);
      var i = u(t, o);
      return {
        kind: "LinkedField",
        alias: a.alias,
        name: i,
        storageKey: i,
        args: null,
        concreteType: a.concreteType,
        plural: a.plural,
        selections: a.selections,
      };
    }
    a.exports = c;
  },
  null,
);
