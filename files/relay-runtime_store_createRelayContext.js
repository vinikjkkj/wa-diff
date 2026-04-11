__d(
  "relay-runtime/store/createRelayContext",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return (
        e || ((e = t.createContext(null)), (s = t)),
        t === s || l(0, 52255, t.version),
        e
      );
    }
    a.exports = u;
  },
  null,
);
