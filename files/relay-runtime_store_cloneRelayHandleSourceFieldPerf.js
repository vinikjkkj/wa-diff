__d(
  "relay-runtime/store/cloneRelayHandleSourceFieldPerf",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayConcreteNode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/util/RelayConcreteNode").LINKED_FIELD,
      u = n("relay-runtime/store/RelayStoreUtils").getHandleStorageKey,
      c = new WeakMap();
    function d(t, r, o) {
      var a = u(t, o),
        i = c.get(t);
      if (i != null && i.handleKey === a && i.selections === r) return i.field;
      var d = r.find(function (r) {
        return (
          r.kind === s &&
          r.name === t.name &&
          r.alias === t.alias &&
          (e || (e = n("areEqual")))(r.args, t.args)
        );
      });
      (d && d.kind === s) || l(0, 2847, t.handle);
      var m = {
        kind: "LinkedField",
        alias: d.alias,
        name: a,
        storageKey: a,
        args: null,
        concreteType: d.concreteType,
        plural: d.plural,
        selections: d.selections,
      };
      return (c.set(t, { field: m, handleKey: a, selections: r }), m);
    }
    a.exports = d;
  },
  null,
);
