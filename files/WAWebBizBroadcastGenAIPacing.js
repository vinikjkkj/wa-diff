__d(
  "WAWebBizBroadcastGenAIPacing",
  ["WAWebBizBroadcastGenAIGating", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "genai_bb_pacing",
      s = 864e5;
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t.requestCount,
        o = t.startTime;
      return typeof o != "number" ||
        !isFinite(o) ||
        typeof n != "number" ||
        !isFinite(n)
        ? null
        : { requestCount: n, startTime: o };
    }
    function c(t) {
      r("WAWebUserPrefsStore").setUser(e, t, { shouldWriteToIdb: !1 });
    }
    function d(e) {
      return Date.now() - e.startTime >= s;
    }
    function m() {
      var e = u();
      return e == null || d(e) ? 0 : e.requestCount;
    }
    function p() {
      var e = u();
      if (e == null || d(e)) {
        var t = { requestCount: 1, startTime: Date.now() };
        return (c(t), 1);
      }
      var n = e.requestCount + 1;
      return (c({ requestCount: n, startTime: e.startTime }), n);
    }
    function _() {
      var e = o("WAWebBizBroadcastGenAIGating").getGenAIMaxDaily();
      return m() >= e;
    }
    function f() {
      var e = o("WAWebBizBroadcastGenAIGating").getGenAIMaxDaily(),
        t = m();
      return Math.max(0, e - t);
    }
    function g() {
      var e = u();
      if (e == null || d(e)) return 0;
      var t = Date.now() - e.startTime,
        n = s - t;
      return Math.max(1, Math.ceil(n / (3600 * 1e3)));
    }
    ((l.getRequestCount = m),
      (l.incrementRequestCount = p),
      (l.hasReachedDailyLimit = _),
      (l.getRemainingGenerations = f),
      (l.getHoursUntilReset = g));
  },
  98,
);
