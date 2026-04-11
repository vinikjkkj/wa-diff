__d(
  "WAWebViewOnceState",
  ["WATimeUtils", "WAWebAck", "WAWebFrontendMsgGetters", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 1209600;
    function s(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t != null
        ? o("WAWebFrontendMsgGetters").getAsViewOnce(t.unsafe())
        : null;
    }
    function u(e) {
      return !c(e) && !d(e);
    }
    function c(e) {
      var t;
      return ((t = s(e)) == null ? void 0 : t.ack) === o("WAWebAck").ACK.PLAYED;
    }
    function d(t) {
      var n = s(t);
      if (n == null) return !1;
      var r = o("WATimeUtils").unixTime() - o("WAWebStateUtils").unproxy(n).t;
      return !c(n) && r >= e;
    }
    ((l.VIEW_ONCE_EXPIRE_AFTER = e),
      (l.isUnviewed = u),
      (l.isViewed = c),
      (l.isExpired = d));
  },
  98,
);
