__d(
  "intersectArrays",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.splice(0, 1)[0] || [],
        o = t.map(function (e) {
          return new Set(e);
        });
      return r.filter(function (e) {
        return o.every(function (t) {
          return t.has(e);
        });
      });
    }
    i.default = e;
  },
  66,
);
