__d(
  "WAWebBroadcastInsightStatus",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1728e5,
      l = 7200 * 60 * 1e3,
      s = 50,
      u = n("$InternalEnum").Mirrored(["DELIVERING", "READY", "SENT"]),
      c = { readRateThresholdPercent: s, readyDelayMs: e, sentDelayMs: l };
    function d(e, t, n, r, o, a) {
      a === void 0 && (a = c);
      var i = n > 0 && t >= n,
        l = e <= o - a.sentDelayMs;
      if (i || l) return u.SENT;
      var s = e <= o - a.readyDelayMs,
        d = t > 0 ? (r / t) * 100 : 0;
      return s || d > a.readRateThresholdPercent ? u.READY : u.DELIVERING;
    }
    ((i.InsightStatus = u), (i.getInsightStatus = d));
  },
  66,
);
