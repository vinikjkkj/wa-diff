__d(
  "omit",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Set(t),
        r = {};
      for (var o of Object.keys(e)) n.has(o) || (r[o] = e[o]);
      return r;
    }
    i.default = e;
  },
  66,
);
