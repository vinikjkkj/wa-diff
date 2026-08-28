__d(
  "memoizeWithExposedCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = t();
      function o() {
        var t = n.apply(void 0, arguments);
        if (r.has(t)) return r.get(t);
        var o = e.apply(void 0, arguments);
        return (r.set(t, o), o);
      }
      return ((o.cache = r), o);
    }
    i.default = e;
  },
  66,
);
