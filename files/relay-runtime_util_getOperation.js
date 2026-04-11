__d(
  "relay-runtime/util/getOperation",
  ["relay-runtime/util/RelayConcreteNode"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/util/RelayConcreteNode").REQUEST,
      l = n("relay-runtime/util/RelayConcreteNode").SPLIT_OPERATION;
    function s(t) {
      switch (t.kind) {
        case e:
          return t.operation;
        case l:
        default:
          return t;
      }
    }
    a.exports = s;
  },
  null,
);
