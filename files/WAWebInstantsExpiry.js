__d(
  "WAWebInstantsExpiry",
  [
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebInstantMsgTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !o("WAWebInstantMsgTypes").isInstantMsgType(e.type) ||
        e.t == null ||
        e.t <= 0
        ? null
        : e.t + o("WATimeUtils").DAY_SECONDS;
    }
    function s(t, n) {
      var r = e(t);
      return (
        r != null &&
        n >= r &&
        o("WAWebInstantMsgTypes").isInstantTypeReceiverEnabled(t.type)
      );
    }
    function u(e) {
      return s(e, o("WATimeUtils").unixTime());
    }
    function c(t, n, r) {
      var a = n.id,
        i = n.t,
        l = m(n.expiredTimestamp) ? Number(n.expiredTimestamp) : void 0,
        s = e({ type: t, t: i });
      if (a == null || i == null || s == null) return l;
      if (
        m(r == null ? void 0 : r.afterReadDuration) &&
        o("WAWebAfterReadUtils").isAfterReadEnabled()
      )
        return l != null ? Math.min(l, s) : void 0;
      var u = r == null ? void 0 : r.expiration;
      return Math.min(s, m(u) ? i + Number(u) : 1 / 0, l != null ? l : 1 / 0);
    }
    function d(t, n) {
      var r, a;
      if (
        !o("WAWebInstantMsgTypes").isInstantMsgType(t.type) ||
        o("WAWebEphemeralKeepInChatUtils").isKept(t.kicState)
      )
        return n;
      var i =
        (r = (a = e(t)) != null ? a : t.expiredTimestamp) != null
          ? r
          : o("WATimeUtils").unixTime() + o("WATimeUtils").DAY_SECONDS;
      return n == null ? i : Math.min(n, i);
    }
    function m(e) {
      return e != null && e > 0;
    }
    ((l.getInstantExpiryTs = e),
      (l.isInstantExpiredAt = s),
      (l.isInstantExpired = u),
      (l.getInstantExpiryStamp = c),
      (l.capAfterReadDeadlineForInstant = d));
  },
  98,
);
