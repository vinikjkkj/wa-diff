__d(
  "WAWebVoipCallStateUtils",
  ["WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.Calling ||
        e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived
      );
    }
    function s(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
        e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
      );
    }
    function u(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.Screening;
    }
    function c(e, t) {
      return s(e) || (t === !1 && u(e));
    }
    function d(t, n) {
      return e(t) || (n === !0 && u(t));
    }
    function m(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.AcceptSent;
    }
    function p(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.CallActive;
    }
    function _(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function f(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.None ||
        e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      );
    }
    function g(t) {
      return e(t) || s(t);
    }
    ((l.isCallOutgoing = e),
      (l.isCallIncoming = s),
      (l.isCallScreening = u),
      (l.isCallIncomingForRole = c),
      (l.isCallOutgoingForRole = d),
      (l.isCallConnecting = m),
      (l.isCallActive = p),
      (l.isCallConnected = _),
      (l.isCallTerminal = f),
      (l.isCallRinging = g));
  },
  98,
);
