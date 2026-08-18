__d(
  "WAWebVoipActionWriteCallLogEventUpdate1to1",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.CallId,
              a = t.PeerJid,
              i = t.Result,
              l = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
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
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).updateVoipCallLogOutcomeImpl({
              callOutcome: s(i),
              chatId: u,
              msgKey: p,
            });
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
        })),
        c.apply(this, arguments)
      );
    }
    l.generateCallLogFromEventUpdate1to1 = u;
  },
  98,
);
