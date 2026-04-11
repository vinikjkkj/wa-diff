__d(
  "WAWebCompatibility",
  ["WAWebModernizr"],
  function (t, n, r, o, a, i, l) {
    var e = "animation",
      s = "transition";
    function u(t, n) {
      var r,
        a = o("WAWebModernizr").getModernizr();
      if (t.indexOf(e) === 0) {
        r = t.substring(e.length);
        var i = a ? a.prefixed(e) : e;
        return c(i, e, r);
      } else if (t.indexOf(s) === 0) {
        r = t.substring(s.length);
        var l = a ? a.prefixed(s) : s;
        return c(l, s, r);
      }
      return a == null ? t : a.prefixed(t, n, !1) || t;
    }
    function c(e, t, n) {
      var r = e.toLowerCase().indexOf(t),
        o = e.slice(0, r).toLowerCase();
      return e.indexOf(t) === 0
        ? o + e.slice(r) + n.toLowerCase()
        : o + e.slice(r) + n;
    }
    l.compatPrefix = u;
  },
  98,
);
