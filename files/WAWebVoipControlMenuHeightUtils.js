__d(
  "WAWebVoipControlMenuHeightUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 8,
      l = 420,
      s = 120;
    function u(t) {
      var n, r;
      if (t == null) return l;
      var o = t.getBoundingClientRect(),
        a = o.bottom,
        i = o.top,
        u =
          (n =
            (r = t.ownerDocument.documentElement) == null
              ? void 0
              : r.clientHeight) != null
            ? n
            : 0,
        c = Math.max(i, u - a) - e;
      return Math.max(s, Math.min(l, c));
    }
    i.getControlMenuMaxHeight = u;
  },
  66,
);
