__d(
  "WAWebUnknownUserDisplayStore",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 4 * o("WATimeUtils").WEEK_SECONDS,
      s = 500,
      u = new Map();
    function c() {
      var e = u.size - s;
      if (!(e <= 0)) {
        var t = Array.from(u.keys()).sort(function (e, t) {
          var n,
            r,
            o = u.get(e),
            a = u.get(t);
          return (
            ((n = o == null ? void 0 : o.lastDisplayedAt) != null ? n : 0) -
            ((r = a == null ? void 0 : a.lastDisplayedAt) != null ? r : 0)
          );
        });
        for (var n of t) {
          if (e <= 0) break;
          (u.delete(n), e--);
        }
      }
    }
    function d(t) {
      var n = o("WATimeUtils").unixTime(),
        r = t.toString(),
        a = u.get(r);
      return a == null || n - a.lastDisplayedAt >= e
        ? (u.set(r, { firstDisplayedAt: n, lastDisplayedAt: n }),
          c(),
          { durationInSecs: 0, isFirstDisplay: !0 })
        : ((a.lastDisplayedAt = n),
          { durationInSecs: n - a.firstDisplayedAt, isFirstDisplay: !1 });
    }
    ((l.MAX_EPISODE_ENTRIES = s), (l.recordDisplayForJid = d));
  },
  98,
);
