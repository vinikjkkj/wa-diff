__d(
  "differenceSets",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = new Set(),
          n = arguments.length,
          r = new Array(n > 1 ? n - 1 : 0),
          o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      e: for (var a of e) {
        for (var i of r) if (i.has(a)) continue e;
        t.add(a);
      }
      return t;
    }
    i.default = e;
  },
  66,
);
