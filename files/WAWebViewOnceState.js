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
      return _((t = s(e)) == null ? void 0 : t.ack);
    }
    function d(e) {
      var t = s(e);
      return t == null ? !1 : f(t.ack, o("WAWebStateUtils").unproxy(t).t);
    }
    function m(e, t) {
      return _(e) ? "viewed" : f(e, t) ? "expired" : "unviewed";
    }
    function p(e, t) {
      return !_(e) && !f(e, t);
    }
    function _(e) {
      return e === o("WAWebAck").ACK.PLAYED;
    }
    function f(t, n) {
      return !_(t) && o("WATimeUtils").unixTime() - n >= e;
    }
    ((l.VIEW_ONCE_EXPIRE_AFTER = e),
      (l.isUnviewed = u),
      (l.isViewed = c),
      (l.isExpired = d),
      (l.getViewOnceStatusFor = m),
      (l.isUnviewedFor = p),
      (l.isViewedFor = _),
      (l.isExpiredFor = f));
  },
  98,
);
