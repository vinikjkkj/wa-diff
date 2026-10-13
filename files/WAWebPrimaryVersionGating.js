__d(
  "WAWebPrimaryVersionGating",
  ["WAWebPrimaryVersion"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(o("WAWebPrimaryVersion").getStoredPrimaryCurrentVersion(), e);
      return t != null && t >= 0;
    }
    function s(e, t) {
      var n = e == null ? null : u(e),
        r = u(t);
      if (n == null || r == null) return null;
      for (var o = Math.max(n.length, r.length), a = 0; a < o; a++) {
        var i,
          l,
          s = ((i = n[a]) != null ? i : 0) - ((l = r[a]) != null ? l : 0);
        if (s !== 0) return s;
      }
      return 0;
    }
    function u(e) {
      var t = e.trim().split(".");
      return t.some(function (e) {
        return !/^\d+$/.test(e);
      })
        ? null
        : t.map(Number);
    }
    l.primaryVersionIsAtLeast = e;
  },
  98,
);
