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
      return e === o("WAWebVoipWaCallEnums").CallState.AcceptSent;
    }
    function c(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.CallActive;
    }
    function d(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function m(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.None ||
        e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding
      );
    }
    function p(t) {
      return e(t) || s(t);
    }
    ((l.isCallOutgoing = e),
      (l.isCallIncoming = s),
      (l.isCallConnecting = u),
      (l.isCallActive = c),
      (l.isCallConnected = d),
      (l.isCallTerminal = m),
      (l.isCallRinging = p));
  },
  98,
);
