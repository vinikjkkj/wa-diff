__d(
  "WAWebVoipActionWriteCallLogEventUpdate1to1",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallNotificationBus",
    "WAWebMsgKey",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipWaCallEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere ||
        e === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere
        ? o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
        : e === o("WAWebVoipWaCallEnums").CallLogResult.Rejected ||
            e === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable ||
            e === o("WAWebVoipWaCallEnums").CallLogResult.Canceled ||
            e === o("WAWebVoipWaCallEnums").CallLogResult.Missed
          ? o("WAWebCallLogMsgData.flow").CallOutcome.Missed
          : e === o("WAWebVoipWaCallEnums").CallLogResult.Failed
            ? o("WAWebCallLogMsgData.flow").CallOutcome.Failed
            : o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
    }
    async function u(t) {
      try {
        var n = t.CallId,
          a = t.PeerJid,
          i = t.Result;
        i === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere &&
          r("WAWebCallNotificationBus").trigger("screened_call_accepted", n);
        var l = await o(
            "WAWebVoipBackendCallLogTargetResolver",
          ).getCallLogTargetDetails({
            callId: n,
            peerWid: a,
            groupJid: null,
            callCreatorWid: a,
          }),
          u = l.chatId,
          c = l.fromMe,
          d = l.msgKeyId,
          m = l.participant,
          p = new (r("WAWebMsgKey"))({
            remote: u,
            participant: m,
            fromMe: c,
            id: d,
          });
        await o("WAWebVoipActionWriteCallLogImpl").updateVoipCallLogOutcomeImpl(
          babelHelpers.extends(
            { callOutcome: s(i), chatId: u, msgKey: p },
            i === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere
              ? { screenedElsewhere: !1 }
              : null,
          ),
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[generateCallLogFromEventUpdate1to1] call log gen failed ",
                "",
              ])),
            t,
          )
          .tags("nexus-voip")
          .sendLogs("generate-call-log-event=update-1to1");
      }
    }
    l.generateCallLogFromEventUpdate1to1 = u;
  },
  98,
);
