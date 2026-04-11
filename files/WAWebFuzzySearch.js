__d(
  "WAWebFuzzySearch",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = [],
        r = t.length,
        o = e.length;
      if (o > r) return [];
      for (var a, i = 0, l = 0; i < o; i++) {
        a = !1;
        for (var s = e.charCodeAt(i); l < r; )
          if (t.charCodeAt(l++) === s) {
            (n.push(l - 1), (a = !0));
            break;
          }
        if (!a) return [];
      }
      return n;
    }
    function l(t, n) {
      return !t || !!e(t, n).length;
    }
    ((i.fuzzyMatches = e), (i.fuzzySearch = l));
  },
  66,
);
