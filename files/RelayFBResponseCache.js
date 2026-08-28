__d(
  "RelayFBResponseCache",
  ["RelayRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("RelayRuntime").QueryResponseCache,
      l = 10,
      s = 300 * 1e3;
    a.exports = new e({ size: l, ttl: s });
  },
  null,
);
