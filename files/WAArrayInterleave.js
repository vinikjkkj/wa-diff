__d(
  "WAArrayInterleave",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (
        var n = [], r = e.length, o = t.length, a = Math.max(r, o), i = 0;
        i < a;
        i++
      )
        (i < r && n.push(e[i]), i < o && n.push(t[i]));
      return n;
    }
    i.default = e;
  },
  66,
);
