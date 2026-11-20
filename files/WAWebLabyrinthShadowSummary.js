__d(
  "WAWebLabyrinthShadowSummary",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = 0,
        n = 0,
        r = 0,
        o = 0,
        a = 0;
      for (var i of e)
        ((t += i.comparison.inBoth),
          (n += i.comparison.onlyLocal.length),
          (r += i.comparison.onlyInLabyrinth.length),
          (o += i.onlyInLabyrinthBeyondHistorySync),
          (a += i.localSincePairing));
      var s = t + n,
        u = s + r,
        c = s - a,
        d = t + r;
      return {
        deliveredLive: a,
        historySyncShare: l(c, u),
        inBoth: t,
        labyrinthShare: l(d, u),
        onlyInLabyrinth: r,
        onlyInLabyrinthBeyondHistorySync: o,
        onlyLocal: n,
        recall: l(t, s),
        restorableViaHistorySync: c,
        restorableViaLabyrinth: d,
        total: u,
      };
    }
    function l(e, t) {
      return t === 0 ? null : e / t;
    }
    i.summarizeLabyrinthShadow = e;
  },
  66,
);
