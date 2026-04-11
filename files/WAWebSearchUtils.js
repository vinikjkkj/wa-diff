__d(
  "WAWebSearchUtils",
  ["WAWebL10NAccentFold"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebL10NAccentFold").accentFold(e.trim().toLowerCase());
    }
    function s(e, t, n) {
      if (n == null) {
        var r = e.filter(t);
        return {
          results: r,
          pagination: { page: 0, pageLength: r.length, hasMoreResults: !1 },
        };
      }
      for (
        var o = [],
          a = null,
          i = n.page,
          l = i === void 0 ? 0 : i,
          s = n.pageLength,
          u = s === void 0 ? e.length : s,
          c = (l + 1) * u + 1,
          d = 0;
        d < e.length && o.length !== c;
        d++
      ) {
        var m = e[d];
        t(m) && o.push(m);
      }
      return (
        o.length === c ? (a = !0) : (a = !1),
        {
          results: o.slice(l * u, l * u + u),
          pagination: { page: l, pageLength: u, hasMoreResults: a },
        }
      );
    }
    ((l.normalizeString = e), (l.filterPaginate = s));
  },
  98,
);
