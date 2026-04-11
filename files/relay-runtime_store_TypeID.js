__d(
  "relay-runtime/store/TypeID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "client:__type:",
      l = "__TypeSchema";
    function s(t) {
      return e + t;
    }
    function u(t) {
      return t.indexOf(e) === 0;
    }
    a.exports = { generateTypeID: s, isTypeID: u, TYPE_SCHEMA_TYPE: l };
  },
  null,
);
