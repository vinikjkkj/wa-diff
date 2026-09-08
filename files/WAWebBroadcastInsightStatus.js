__d(
  "WAWebBroadcastInsightStatus",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1728e5,
      l = 7200 * 60 * 1e3,
      s = 50,
      u = n("$InternalEnum").Mirrored(["DELIVERING", "READY", "SENT"]);
    function c(t) {
      var n = t.deliveredCount,
        r = t.nowMs,
        o = t.readCount,
        a = t.recipientCount,
        i = t.sentTimestampMs,
        c = a > 0 && n >= a,
        d = i <= r - l;
      if (c || d) return u.SENT;
      var m = i <= r - e,
        p = n > 0 ? (o / n) * 100 : 0;
      return m || p > s ? u.READY : u.DELIVERING;
    }
    ((i.InsightStatus = u), (i.getInsightStatus = c));
  },
  66,
);
