__d(
  "WAWebInstantsExpiry",
  ["WATimeUtils", "WAWebABProps", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE ||
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
        o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled")
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
