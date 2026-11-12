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
        n.root.rootCallId === t &&
        (e = babelHelpers.extends({}, n, { hasFailed: !0 }));
    }
    function m(t) {
      var n = e;
      n != null &&
        n.callId === t &&
        (e = babelHelpers.extends({}, n, { hasEnded: !1, hasFailed: !1 }));
    }
    function p(t) {
      var n = e;
      return n != null && n.callId === t && n.hasFailed;
    }
    function _(t) {
      var n = e;
      return n != null && n.callId === t && !n.hasEnded;
    }
    function f(t) {
      var n;
      return _(t) ? ((n = e) == null ? void 0 : n.root.rootCallId) : null;
    }
    function g(t) {
      var n = e;
      return _(t) && n != null ? n.startedAt : null;
    }
    function h(t, n) {
      var r = e;
      return r == null || r.callId !== t
        ? !1
        : ((e = babelHelpers.extends({}, r, { callId: n })), !0);
    }
    function y(t) {
      var n;
      t != null && ((n = e) == null ? void 0 : n.callId) === t && (e = null);
    }
    function C(t) {
      var n = e;
      return n != null && n.callId === t ? n.root : null;
    }
    ((l.registerTransferredCall = s),
      (l.markTransferredCallEnded = u),
      (l.markTransferredCallFailed = c),
      (l.markTransferredCallFailedForRoot = d),
      (l.clearTransferredCallEndMarks = m),
      (l.hasTransferredCallFailed = p),
      (l.isTransferredCallLive = _),
      (l.getLiveTransferredCallRootId = f),
      (l.getLiveTransferredCallStartTime = g),
      (l.rekeyTransferredCall = h),
      (l.unregisterTransferredCall = y),
      (l.getTransferredCallRoot = C));
  },
  98,
);
