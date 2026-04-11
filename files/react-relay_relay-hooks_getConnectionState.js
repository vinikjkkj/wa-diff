__d(
  "react-relay/relay-hooks/getConnectionState",
  ["invariant", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime").ConnectionInterface,
      s = n("relay-runtime").getValueAtPath;
    function u(t, n, r, o) {
      var a,
        i,
        u = e.get(),
        c = u.EDGES,
        d = u.PAGE_INFO,
        m = u.HAS_NEXT_PAGE,
        p = u.HAS_PREV_PAGE,
        _ = u.END_CURSOR,
        f = u.START_CURSOR,
        g = s(r, o);
      if (g == null) return { cursor: null, hasMore: !1 };
      typeof g == "object" || l(0, 14137, n.name, c, d, g);
      var h = g[c],
        y = g[d];
      if (h == null || y == null) return { cursor: null, hasMore: !1 };
      (Array.isArray(h) || l(0, 14138, n.name, c, h),
        typeof y == "object" || l(0, 14139, n.name, d, y));
      var C =
        t === "forward"
          ? (a = y[_]) != null
            ? a
            : null
          : (i = y[f]) != null
            ? i
            : null;
      C === null || typeof C == "string" || l(0, 14140, n.name, f, C);
      var b;
      return (
        t === "forward"
          ? (b = C != null && y[m] === !0)
          : (b = C != null && y[p] === !0),
        { cursor: C, hasMore: b }
      );
    }
    a.exports = u;
  },
  null,
);
