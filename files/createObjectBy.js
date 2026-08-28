__d(
  "createObjectBy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          a = t(o, r, e);
        n[a] = o;
      }
      return n;
    }
    i.default = e;
  },
  66,
);
