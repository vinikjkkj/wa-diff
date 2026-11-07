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
      n != null &&
        n.callId === t &&
        (e = babelHelpers.extends({}, n, { hasEnded: !1, hasFailed: !1 }));
    }
    function m(t) {
      var n = e;
      return n != null && n.callId === t && n.hasFailed;
    }
    function p(t) {
      var n = e;
      return n != null && n.callId === t && !n.hasEnded;
    }
    function _(t) {
      var n;
      return p(t) ? ((n = e) == null ? void 0 : n.root.rootCallId) : null;
    }
    function f(t) {
      var n = e;
      return p(t) && n != null ? n.startedAt : null;
    }
    function g(t, n) {
      var r = e;
      return r == null || r.callId !== t
        ? !1
        : ((e = babelHelpers.extends({}, r, { callId: n })), !0);
    }
    function h(t) {
      var n;
      t != null && ((n = e) == null ? void 0 : n.callId) === t && (e = null);
    }
    function y(t) {
      var n = e;
      return n != null && n.callId === t ? n.root : null;
    }
    ((l.registerTransferredCall = s),
      (l.markTransferredCallEnded = u),
      (l.markTransferredCallFailed = c),
      (l.clearTransferredCallEndMarks = d),
      (l.hasTransferredCallFailed = m),
      (l.isTransferredCallLive = p),
      (l.getLiveTransferredCallRootId = _),
      (l.getLiveTransferredCallStartTime = f),
      (l.rekeyTransferredCall = g),
      (l.unregisterTransferredCall = h),
      (l.getTransferredCallRoot = y));
  },
  98,
);
