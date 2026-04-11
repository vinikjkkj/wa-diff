__d(
  "WAWebWindowsNativeBridgeParseGroupInfoChangedData",
  [
    "WAWebVoipJsonParserNative",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case 0:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
        case 1:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
        case 2:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Incoming;
        case 3:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Receipt;
        case 4:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Rejected;
        case 5:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Terminated;
        case 6:
          return o("WAWebVoipWaCallEnums").CallParticipantState.TimedOut;
        case 7:
          return o("WAWebVoipWaCallEnums").CallParticipantState.CreatingCall;
        case 8:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invisible;
        case 9:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Visible;
        case 10:
          return o("WAWebVoipWaCallEnums").CallParticipantState.CancelOffer;
        case 11:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invited;
        default:
          return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
      }
    }
    function s(t) {
      var n = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(t);
      if (n == null) throw r("err")("Invalid group info changed data");
      var a = null;
      if (n.Participants != null) {
        var i = [];
        for (var l of n.Participants)
          i.push({
            participant: o("WAWebWidFactory").createWid(l.Jid),
            outcome: e(l.Result),
          });
        a = i;
      }
      return { CallId: n.CallId, CallParticipants: a };
    }
    l.parseWindowsGroupInfoChangedData = s;
  },
  98,
);
