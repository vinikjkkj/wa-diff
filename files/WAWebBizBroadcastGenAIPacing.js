__d(
  "WAWebBizBroadcastGenAIPacing",
  ["WAWebBizBroadcastGenAIGating", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "genai_bb_pacing",
      s = 36e5,
      u = 24 * s;
    function c() {
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
    function d(t) {
      r("WAWebUserPrefsStore").setUser(e, t, { shouldWriteToIdb: !1 });
    }
    function m(e) {
      return Date.now() - e.startTime >= u;
    }
    function p() {
      var e = c();
      return e == null || m(e) ? 0 : e.requestCount;
    }
    function _() {
      var e = c();
      if (e == null || m(e)) {
        var t = { requestCount: 1, startTime: Date.now() };
        return (d(t), 1);
      }
      var n = e.requestCount + 1;
      return (d({ requestCount: n, startTime: e.startTime }), n);
    }
    function f() {
      var e = o("WAWebBizBroadcastGenAIGating").getGenAIMaxDaily();
      return p() >= e;
    }
    function g() {
      var e = o("WAWebBizBroadcastGenAIGating").getGenAIMaxDaily(),
        t = p();
      return Math.max(0, e - t);
    }
    function h() {
      var e = c();
      if (e == null || m(e)) return 0;
      var t = Date.now() - e.startTime,
        n = u - t;
      return Math.max(1, Math.ceil(n / s));
    }
    ((l.getRequestCount = p),
      (l.incrementRequestCount = _),
      (l.hasReachedDailyLimit = f),
      (l.getRemainingGenerations = g),
      (l.getHoursUntilReset = h));
  },
  98,
);
