__d(
  "WAWebCompactSet",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = e.length, r = new Set(), o = 0; o < n; ++o) {
        var a = t(e[o], o);
        a != null && r.add(a);
      }
      return r;
    }
    i.default = e;
  },
  66,
);
