__d(
  "WAWebInstantsExpiry",
  ["WATimeUtils", "WAWebInstantMsgTypes"],
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
    ((l.getInstantExpiryTs = e),
      (l.isInstantExpiredAt = s),
      (l.isInstantExpired = u));
  },
  98,
);
