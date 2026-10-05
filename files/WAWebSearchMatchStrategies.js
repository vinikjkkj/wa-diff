__d(
  "WAWebSearchMatchStrategies",
  ["WAWebL10NRemoveDiacritics", "WAWebMatchesAtWordBoundary"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.split(/\s+/).filter(Boolean);
      if (n.length === 0) return null;
      var r = [];
      for (var o of n) {
        var a = e.indexOf(o);
        if (a === -1) return null;
        r.push({ startIndex: a, length: o.length });
      }
      return r;
    }
    function s(e, t) {
      var n = o("WAWebL10NRemoveDiacritics").removeDiacritics(e).toLowerCase(),
        r = t.split(/\s+/).filter(Boolean);
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
    ((l.substringMatch = e), (l.wordBoundaryMatch = s));
  },
  98,
);
