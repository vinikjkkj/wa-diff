__d(
  "WAWebAdAccountTokenThrottle",
  ["WATimeUtils", "WAWebUserPrefsCTWA", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = 3e5,
      s = 3600 * 1e3;
    function u() {
      if (!p()) return !1;
      var e = d();
      return e != null && o("WATimeUtils").unixTimeMs() < e.untilMs;
    }
    function c(e) {
      if (p()) {
        var t = d();
        if (e === "too-many-attempts") {
          if (t != null && o("WATimeUtils").unixTimeMs() < t.untilMs) return;
          o("WAWebUserPrefsCTWA").setAdAccountTokenThrottle(m(t));
        } else
          e === "success" &&
            t != null &&
            o("WAWebUserPrefsCTWA").setAdAccountTokenThrottle(null);
      }
    }
    function d() {
      var e = o("WAWebUserPrefsCTWA").getAdAccountTokenThrottle();
      if (e == null) return null;
      var t = o("WATimeUtils").unixTimeMs() + s;
      if (e.untilMs <= t) return e;
      var n = { consecutiveCount: e.consecutiveCount, untilMs: t };
      return (o("WAWebUserPrefsCTWA").setAdAccountTokenThrottle(n), n);
    }
    function m(t) {
      var n,
        r = o("WATimeUtils").unixTimeMs(),
        a = t != null && r - t.untilMs > s,
        i =
          (a
            ? 0
            : (n = t == null ? void 0 : t.consecutiveCount) != null
              ? n
              : 0) + 1,
        l = Math.max(Math.min(e * Math.pow(2, i - 1), s), e);
      return { consecutiveCount: i, untilMs: r + l };
    }
    function p() {
      return r("justknobx")._("7158");
    }
    ((l.isAdAccountTokenFetchThrottled = u),
      (l.recordAdAccountTokenFetchResult = c),
      (l.isAdAccountTokenThrottleBackoffEnabled = p));
  },
  98,
);
