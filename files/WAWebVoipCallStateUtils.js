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
    function c(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.AcceptSent;
    }
    function d(e) {
      return e === o("WAWebVoipWaCallEnums").CallState.CallActive;
    }
    function m(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function p(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.None ||
        e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      );
    }
    function _(t) {
      return e(t) || s(t);
    }
    ((l.isCallOutgoing = e),
      (l.isCallIncoming = s),
      (l.isCallScreening = u),
      (l.isCallConnecting = c),
      (l.isCallActive = d),
      (l.isCallConnected = m),
      (l.isCallTerminal = p),
      (l.isCallRinging = _));
  },
  98,
);
