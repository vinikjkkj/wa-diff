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
      return n != null && n.callId === t && !n.hasEnded;
    }
    function d(t) {
      var n;
      return c(t) ? ((n = e) == null ? void 0 : n.root.rootCallId) : null;
    }
    function m(t) {
      var n = e;
      return c(t) && n != null ? n.startedAt : null;
    }
    function p(t) {
      var n;
      t != null && ((n = e) == null ? void 0 : n.callId) === t && (e = null);
    }
    function _(t) {
      var n = e;
      return n != null && n.callId === t ? n.root : null;
    }
    ((l.registerTransferredCall = s),
      (l.markTransferredCallEnded = u),
      (l.isTransferredCallLive = c),
      (l.getLiveTransferredCallRootId = d),
      (l.getLiveTransferredCallStartTime = m),
      (l.unregisterTransferredCall = p),
      (l.getTransferredCallRoot = _));
  },
  98,
);
