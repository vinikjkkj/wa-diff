__d(
  "getIncrementalEventCount",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(t) {
      var n;
      return (e || (e = r("performance"))) == null ||
        (n = (e || (e = r("performance"))).eventCounts) == null ||
        n.get == null
        ? void 0
        : n.get(t);
    }
    function c(e, t) {
      var n = u(e);
      if (n == null) return null;
      var r = t + "_" + e,
        o = s.get(r);
      return (s.set(r, n), o != null ? n - o : n);
    }
    l.default = c;
  },
  98,
);
