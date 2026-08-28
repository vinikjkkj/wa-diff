__d(
  "findInMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (t(o, r)) return o;
      }
    }
    i.default = e;
  },
  66,
);
