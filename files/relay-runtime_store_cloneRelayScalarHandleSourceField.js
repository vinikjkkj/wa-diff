__d(
  "relay-runtime/store/cloneRelayScalarHandleSourceField",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayConcreteNode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/util/RelayConcreteNode").SCALAR_FIELD,
      u = n("relay-runtime/store/RelayStoreUtils").getHandleStorageKey;
    function c(t, r, o) {
      var a = r.find(function (r) {
        return (
          r.kind === s &&
          r.name === t.name &&
          r.alias === t.alias &&
          (e || (e = n("areEqual")))(r.args, t.args)
        );
      });
      (a && a.kind === s) || l(0, 23146, t.handle);
      var i = u(t, o);
      return {
        kind: "ScalarField",
        alias: a.alias,
        name: i,
        storageKey: i,
        args: null,
      };
    }
    a.exports = c;
  },
  null,
);
