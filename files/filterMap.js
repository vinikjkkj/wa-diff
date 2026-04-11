__d(
  "filterMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Map();
      for (var r of e) {
        var o = r[0],
          a = r[1];
        t(a, o) && n.set(o, a);
      }
      return n;
    }
    i.default = e;
  },
  66,
);
