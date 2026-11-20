__d(
  "WAWebContactsAndGroupsRecentStripLayout",
  [],
  function (t, n, r, o, a, i) {
    var e = 24,
      l = 48;
    function s(t, n, r) {
      var o = Math.max(1, Math.floor((t + e) / (n + e)));
      if (o < 2 || r < o) return { contentMaxWidth: null, gap: e, perPage: o };
      var a = (t - o * n) / (o - 1);
      return a < l
        ? { contentMaxWidth: null, gap: a, perPage: o }
        : { contentMaxWidth: o * n + (o - 1) * l, gap: l, perPage: o };
    }
    function u(e, t, n, r) {
      if (n < 1) return 0;
      var o = n === t ? e : Math.floor(e / n) * n;
      return Math.max(0, Math.min(o, r - n));
    }
    ((i.MIN_SLOT_GAP = e),
      (i.getStripLayout = s),
      (i.getFirstIndexAfterResize = u));
  },
  66,
);
