__d(
  "WAWebSearchByDateUtils",
  ["WAWebDBSearchByDate", "WAWebMsgKey", "WAWebUserPrefsHistorySync"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Math.floor(e / 1e3);
    }
    function s(e, t, n) {
      var o = null;
      return (
        e != null && t != null
          ? n
            ? (o = e.t >= t.t ? e.id : t.id)
            : (o = e.t <= t.t ? e.id : t.id)
          : e
            ? (o = e.id)
            : t && (o = t.id),
        o != null ? r("WAWebMsgKey").fromString(o) : null
      );
    }
    async function u(e, t, n, r) {
      var a = await o("WAWebDBSearchByDate").getClosestMessageBetweenDates(
          e,
          t,
          n,
          !0,
          r,
        ),
        i = await o("WAWebDBSearchByDate").getClosestMessageBetweenDates(
          e,
          t,
          n,
          !1,
          r,
        );
      return s(a, i, r);
    }
    async function c(t, n) {
      var r = e(n.getTime()),
        a = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1e3,
        i = new Date().getTime(),
        l = await u(t, r, i, !1);
      if (l != null) return l;
      var s = await u(t, a, r, !0);
      return (s != null, s);
    }
    ((l.fromMillisecondsToSeconds = e), (l.getClosestMessageFromDate = c));
  },
  98,
);
