__d(
  "ContextualConfigIsEqualParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n += 1) {
        var r = e[n],
          o = t[n];
        if (r.name !== o.name || r.type !== o.type) return !1;
      }
      return !0;
    }
    i.default = e;
  },
  66,
);
