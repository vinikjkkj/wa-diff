__d(
  "relay-runtime/store/TypeID",
  ["relay-runtime/util/RelayFeatureFlags"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "client:__type:",
      l = "__TypeSchema";
    function s(t) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS
        ? d(t)
        : e + t;
    }
    function u(t) {
      return t.indexOf(e) === 0;
    }
    var c = new Map();
    function d(t) {
      var n = c.get(t);
      return (n === void 0 && ((n = e + t), c.set(t, n)), n);
    }
    a.exports = { generateTypeID: s, isTypeID: u, TYPE_SCHEMA_TYPE: l };
  },
  null,
);
