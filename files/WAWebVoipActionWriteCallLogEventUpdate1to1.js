__d(
  "WAWebVoipActionWriteCallLogEventUpdate1to1",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
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
              l = o("WAWebUserPrefsMeUser").isMeAccount(a),
              u = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callId: n,
                peerWid: a,
                groupJid: null,
                callCreatorWid: a,
              }),
              c = u.chatId,
              d = u.msgKeyId,
              m = u.participant,
              p = u.viewMode,
              _ = s(i),
              f = {
                id: new (r("WAWebMsgKey"))({
                  remote: c,
                  participant: m,
                  fromMe: l,
                  id: d,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: "callLog",
                callOutcome: _,
                isVideoCall: !1,
                to: c,
                from: a,
                t: o("WATimeUtils").castToUnixTime(Date.now() / 1e3),
                viewMode: p,
              };
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(c, f, !1);
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
