__d(
  "WAWebSyncingMessagesCountTween",
  [],
  function (t, n, r, o, a, i) {
    var e = 300,
      l = 150,
      s = 800,
      u = 10;
    function c(e, t) {
      return { from: e, target: e, startMs: t, durationMs: 0 };
    }
    function d(t, n, r, o) {
      var a = n === t.target && (!o || m(t, r) === n);
      if (n < t.target || a) return t;
      var i = o ? e : Math.min(Math.max(r - t.startMs, l), s);
      return { from: m(t, r), target: n, startMs: r, durationMs: i };
    }
    function m(e, t) {
      var n = t - e.startMs;
      if (e.durationMs <= 0 || n >= e.durationMs) return e.target;
      var r = Math.max(n, 0) / e.durationMs,
        o = 1 - Math.pow(1 - r, 3);
      return e.from + Math.floor((e.target - e.from) * o);
    }
    function p(e) {
      return Math.floor(e / u);
    }
    ((i.FINAL_COUNT_TWEEN_MS = e),
      (i.createCountTween = c),
      (i.retargetCountTween = d),
      (i.getTweenedCount = m),
      (i.getMessageCountBucket = p));
  },
  66,
);
