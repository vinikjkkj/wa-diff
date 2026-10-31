__d(
  "WAWebVoipLastCallStore",
  ["WALogger", "WATimeUtils", "WAWebUserPrefsStore", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "voip_last_call",
      u = null;
    function c() {
      return (u == null && (u = { lastCall: f() }), u.lastCall);
    }
    function d(e) {
      var t = e.connectedDays,
        n = e.placedDays;
      return t == null || n == null ? (t != null ? t : n) : Math.min(t, n);
    }
    function m() {
      var e = r("WAWebUserPrefsStore").get(s, { ignoreCache: !0 });
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = h(e.since);
      return t == null
        ? null
        : { connected: h(e.connected), placed: h(e.placed), since: t };
    }
    function p(e) {
      r("WAWebUserPrefsStore").set(s, e, { shouldWriteToIdb: !1 });
    }
    function _(e, t) {
      return e - t > o("WATimeUtils").DAY_SECONDS;
    }
    function f() {
      var t, n, a, i;
      try {
        i = m();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: last call not read",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
      var l = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
      return {
        connectedDays: g((t = i) == null ? void 0 : t.connected, l),
        historyDays: g((n = i) == null ? void 0 : n.since, l),
        placedDays: g((a = i) == null ? void 0 : a.placed, l),
      };
    }
    function g(e, t) {
      return e == null || _(e, t)
        ? null
        : Math.max(0, Math.floor((t - e) / o("WATimeUtils").DAY_SECONDS));
    }
    function h(e) {
      return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    ((l.getBootLastCall = c),
      (l.getLastCallDays = d),
      (l.readLastCallRecord = m),
      (l.writeLastCallRecord = p),
      (l.isAheadOfClock = _));
  },
  98,
);
