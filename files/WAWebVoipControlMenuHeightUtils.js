__d(
  "WAWebVoipControlMenuHeightUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 8,
      l = 420,
      s = 120,
      u = 80;
    function c(t, n) {
      var r, o;
      n === void 0 && (n = 0);
      var a = Math.max(u, l - n),
        i = Math.max(s - n, u);
      if (t == null) return a;
      var c = t.getBoundingClientRect(),
        d = c.bottom,
        m = c.top,
        p =
          (r =
            (o = t.ownerDocument.documentElement) == null
              ? void 0
              : o.clientHeight) != null
            ? r
            : 0,
        _ = Math.max(m, p - d) - e - n;
      return Math.max(i, Math.min(a, _));
    }
    i.getControlMenuMaxHeight = c;
  },
  66,
);
