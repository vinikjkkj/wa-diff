__d(
  "relay-runtime/util/createPayloadFor3DField",
  ["relay-runtime/store/RelayStoreUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").getModuleComponentKey,
      l = n("relay-runtime/store/RelayStoreUtils").getModuleOperationKey;
    function s(t, n, r, o) {
      var a = babelHelpers.extends({}, o);
      return ((a[e(t)] = r), (a[l(t)] = n), a);
    }
    a.exports = s;
  },
  null,
);
