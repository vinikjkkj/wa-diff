__d(
  "WAWebBizAiSmartComposerEditMetrics",
  [],
  function (t, n, r, o, a, i) {
    var e = /\S+/g,
      l = 1e6;
    function s(e, t) {
      var n = u(e),
        r = u(t),
        o = c(n, r),
        a = n.length;
      return {
        wasEdited: o > 0,
        editDistance: o,
        suggestionWordCount: a,
        editDistanceRatio: a === 0 ? 0 : Math.min(o / a, 1),
      };
    }
    function u(t) {
      var n;
      return (n = t.match(e)) != null ? n : [];
    }
    function c(e, t) {
      var n = d(e, t),
        r = n[0],
        o = n[1],
        a = r,
        i = o;
      if (
        (a.length > i.length && ((a = o), (i = r)),
        a.length === 0 || i.length > Math.floor(l / a.length))
      )
        return i.length;
      for (
        var s = Array.from({ length: a.length + 1 }, function (e, t) {
            return t;
          }),
          u = Array(a.length + 1).fill(0),
          c = 1;
        c <= i.length;
        c++
      ) {
        u[0] = c;
        for (var m = 1; m <= a.length; m++) {
          var p = i[c - 1] === a[m - 1] ? 0 : 1;
          u[m] = Math.min(s[m] + 1, u[m - 1] + 1, s[m - 1] + p);
        }
        var _ = s;
        ((s = u), (u = _));
      }
      return s[a.length];
    }
    function d(e, t) {
      for (var n = 0; n < e.length && n < t.length && e[n] === t[n]; ) n++;
      for (
        var r = e.length, o = t.length;
        r > n && o > n && e[r - 1] === t[o - 1];
      )
        (r--, o--);
      return [e.slice(n, r), t.slice(n, o)];
    }
    i.calculateSmartComposerEditMetrics = s;
  },
  66,
);
