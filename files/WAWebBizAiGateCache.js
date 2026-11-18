__d(
  "WAWebBizAiGateCache",
  ["WATimeUtils", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = 21600;
    function s(t) {
      var n = r("WAWebUserPrefsStore").getUser(t);
      if (n == null || typeof n != "object") return null;
      var a = n.enabled,
        i = n.ts;
      if (typeof a != "boolean" || typeof i != "number") return null;
      var l = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(e, o("WATimeUtils").castToUnixTime(i)),
      );
      return l ? null : a;
    }
    function u(e, t) {
      r("WAWebUserPrefsStore").setUser(e, {
        enabled: t,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    ((l.getCachedBizAiGate = s), (l.cacheBizAiGate = u));
  },
  98,
);
