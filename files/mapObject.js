__d(
  "mapObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (!e) return null;
      for (var r = {}, o = Object.keys(e), a = o.length, i = 0; i < a; i++) {
        var l = o[i];
        r[l] = t.call(n, e[l], l, e);
      }
      return r;
    }
    function l(t, n, r) {
      return e(t, n, r);
    }
    function s(t, n, r) {
      return e(t, n, r);
    }
    function u(t, n, r) {
      return e(t, n, r);
    }
    ((e.untyped = l), (e.shape = s), (e.self = u), (i.default = e));
  },
  66,
);
