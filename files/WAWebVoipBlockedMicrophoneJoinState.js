__d(
  "WAWebVoipBlockedMicrophoneJoinState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = null,
      s = null,
      u = null,
      c = null;
    function d(e) {
      l = e;
    }
    function m(e) {
      return l === e;
    }
    function p(e) {
      ((s = e), (u = null), (c = null), R());
    }
    function _(e) {
      s === e && ((s = null), R());
    }
    function f(e) {
      (l === e && (l = null), _(e));
    }
    function g() {
      return s;
    }
    function h(e) {
      return s !== e || u === e ? !1 : ((u = e), !0);
    }
    function y(e) {
      s === e && (c = e);
    }
    function C(e) {
      return s === e && c === e;
    }
    function b(e) {
      return s !== e ? !1 : ((s = null), l === e && (l = null), R(), !0);
    }
    function v(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function S() {
      (e.clear(), (l = null), (s = null), (u = null), (c = null));
    }
    function R() {
      for (var t of e) t();
    }
    ((i.recordBlockedMicrophoneMute = d),
      (i.isMutedForBlockedMicrophone = m),
      (i.recordBlockedMicrophoneJoin = p),
      (i.discardBlockedMicrophoneJoin = _),
      (i.forgetBlockedMicrophoneMuteAndJoin = f),
      (i.getBlockedMicrophoneJoinCallId = g),
      (i.claimBlockedMicrophonePrompt = h),
      (i.markBlockedMicrophoneAutoUnmuteStarted = y),
      (i.isBlockedMicrophoneAutoUnmuting = C),
      (i.takeBlockedMicrophoneJoin = b),
      (i.subscribeToBlockedMicrophoneJoin = v),
      (i.resetBlockedMicrophoneJoinForTesting = S));
  },
  66,
);
