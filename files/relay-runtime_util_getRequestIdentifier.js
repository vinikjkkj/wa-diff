__d(
  "relay-runtime/util/getRequestIdentifier",
  ["invariant", "relay-runtime/util/stableCopy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy;
    function u(e, t) {
      var n = e.cacheID != null ? e.cacheID : e.id;
      return (n != null || l(0, 22755, e.name), n + JSON.stringify(s(t)));
    }
    a.exports = u;
  },
  null,
);
