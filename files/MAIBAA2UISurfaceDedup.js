__d(
  "MAIBAA2UISurfaceDedup",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Map();
      e.forEach(function (e, n) {
        e != null && t.set(e, n);
      });
      var n = new Set();
      return (
        e.forEach(function (e, r) {
          e != null && t.get(e) !== r && n.add(r);
        }),
        n
      );
    }
    i.computeSupersededSurfaceIndices = e;
  },
  66,
);
