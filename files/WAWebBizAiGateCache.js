__d(
  "WAWebBizAiGateCache",
  ["WATimeUtils", "WAWebUserPrefsStore", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = 21600,
      s = 10080 * 60;
    function u(t) {
      return m(t, e);
    }
    function c(e, t) {
      var n;
      return t === "debug" || !r("justknobx")._("8488")
        ? !1
        : (n = m(e, s)) != null
          ? n
          : !1;
    }
    function d(e, t) {
      r("WAWebUserPrefsStore").setUser(e, {
        enabled: t,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function m(e, t) {
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (n == null || typeof n != "object") return null;
      var a = n.enabled,
        i = n.ts;
      if (typeof a != "boolean" || typeof i != "number") return null;
      var l = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(t, o("WATimeUtils").castToUnixTime(i)),
      );
      return l ? null : a;
    }
    ((l.getCachedBizAiGate = u),
      (l.getBizAiGateFallback = c),
      (l.cacheBizAiGate = d));
  },
  98,
);
