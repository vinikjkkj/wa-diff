__d(
  "WAWebSlicedMatcher",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e.sortResults != null ? e.sortResults(t) : t;
    }
    function l(e, t) {
      return e.isTimedOut() ? !0 : e.limit != null && t >= e.limit;
    }
    function s(t) {
      var n = [];
      for (var r of t.candidates) {
        if (l(t, n.length)) break;
        var o = t.matchOne(r);
        o != null && n.push(o);
      }
      return e(t, n);
    }
    i.drainMatcherSync = s;
  },
  66,
);
