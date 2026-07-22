__d(
  "WAWebBroadcastInsightStatus",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = 1728e5,
      l = 7200 * 60 * 1e3,
      s = 50,
      u = n("$InternalEnum").Mirrored(["DELIVERING", "READY", "SENT"]);
    function c(t, n, r, o, a) {
      var i = r > 0 && n >= r,
        c = t <= a - l;
      if (i || c) return u.SENT;
      var d = t <= a - e,
        m = n > 0 ? (o / n) * 100 : 0;
      return d || m > s ? u.READY : u.DELIVERING;
    }
    ((i.InsightStatus = u), (i.getInsightStatus = c));
  },
  66,
);
