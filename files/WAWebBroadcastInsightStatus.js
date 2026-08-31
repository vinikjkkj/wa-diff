__d(
  "WAWebBroadcastInsightStatus",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1728e5,
      l = 7200 * 60 * 1e3,
      s = 50,
      u = n("$InternalEnum").Mirrored(["DELIVERING", "READY", "SENT"]),
      c = { readRateThresholdPercent: s, readyDelayMs: e, sentDelayMs: l };
    function d(e) {
      var t = e.deliveredCount,
        n = e.nowMs,
        r = e.readCount,
        o = e.recipientCount,
        a = e.sentTimestampMs,
        i = e.thresholds,
        l = i === void 0 ? c : i,
        s = o > 0 && t >= o,
        d = a <= n - l.sentDelayMs;
      if (s || d) return u.SENT;
      var m = a <= n - l.readyDelayMs,
        p = t > 0 ? (r / t) * 100 : 0;
      return m || p > l.readRateThresholdPercent ? u.READY : u.DELIVERING;
    }
    ((i.InsightStatus = u), (i.getInsightStatus = d));
  },
  66,
);
