__d(
  "WAArrayGroupBy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = new Map(), r = 0; r < e.length; r++) {
        var o = t(e[r]),
          a = n.get(o);
        a == null ? n.set(o, [e[r]]) : a.push(e[r]);
      }
      return Array.from(n.entries());
    }
    i.groupBy = e;
  },
  66,
);
