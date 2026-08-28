__d(
  "createMapBy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = new Map(), r = 0; r < e.length; r++) {
        var o = e[r],
          a = t(o, r, e);
        n.set(a, o);
      }
      return n;
    }
    i.default = e;
  },
  66,
);
