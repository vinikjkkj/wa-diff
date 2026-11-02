__d(
  "WAWebVoipTransferredCallRegistry",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t, n) {
      e = {
        callId: t,
        root: n,
        startedAt: o("WATimeUtils").unixTime(),
        hasEnded: !1,
        hasFailed: !1,
      };
    }
    function u(t) {
      var n = e;
      n != null &&
        n.callId === t &&
        (e = babelHelpers.extends({}, n, { hasEnded: !0 }));
    }
    function c(t) {
      var n = e;
      n != null &&
        n.callId === t &&
        (e = babelHelpers.extends({}, n, { hasFailed: !0 }));
    }
    function d(t) {
      var n = e;
      return n != null && n.callId === t && n.hasFailed;
    }
    function m(t) {
      var n = e;
      return n != null && n.callId === t && !n.hasEnded;
    }
    function p(t) {
      var n;
      return m(t) ? ((n = e) == null ? void 0 : n.root.rootCallId) : null;
    }
    function _(t) {
      var n = e;
      return m(t) && n != null ? n.startedAt : null;
    }
    function f(t) {
      var n;
      t != null && ((n = e) == null ? void 0 : n.callId) === t && (e = null);
    }
    function g(t) {
      var n = e;
      return n != null && n.callId === t ? n.root : null;
    }
    ((l.registerTransferredCall = s),
      (l.markTransferredCallEnded = u),
      (l.markTransferredCallFailed = c),
      (l.hasTransferredCallFailed = d),
      (l.isTransferredCallLive = m),
      (l.getLiveTransferredCallRootId = p),
      (l.getLiveTransferredCallStartTime = _),
      (l.unregisterTransferredCall = f),
      (l.getTransferredCallRoot = g));
  },
  98,
);
