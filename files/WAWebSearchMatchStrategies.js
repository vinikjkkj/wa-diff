__d(
  "WAWebSearchMatchStrategies",
  [
    "WAWebContactSearchGatingUtils",
    "WAWebL10NRemoveDiacritics",
    "WAWebMatchesAtWordBoundary",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled()) {
        var n = t.split(/\s+/).filter(Boolean);
        if (n.length === 0) return null;
        var r = [];
        for (var a of n) {
          var i = e.indexOf(a);
          if (i === -1) return null;
          r.push({ startIndex: i, length: a.length });
        }
        return r;
      }
      var l = e.indexOf(t);
      return l === -1 ? null : [{ startIndex: l, length: t.length }];
    }
    function s(e, t) {
      var n = o("WAWebL10NRemoveDiacritics").removeDiacritics(e).toLowerCase();
      if (o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled()) {
        var r = t.split(/\s+/).filter(Boolean);
        if (r.length === 0) return null;
        var a = [];
        for (var i of r) {
          var l = o("WAWebL10NRemoveDiacritics")
              .removeDiacritics(i)
              .toLowerCase(),
            s = o("WAWebMatchesAtWordBoundary").matchesAtWordBoundary(n, l);
          if (s === -1) return null;
          a.push({ startIndex: s, length: l.length });
        }
        return a;
      }
      var u = o("WAWebL10NRemoveDiacritics").removeDiacritics(t).toLowerCase(),
        c = o("WAWebMatchesAtWordBoundary").matchesAtWordBoundary(n, u);
      return c === -1 ? null : [{ startIndex: c, length: u.length }];
    }
    ((l.substringMatch = e), (l.wordBoundaryMatch = s));
  },
  98,
);
