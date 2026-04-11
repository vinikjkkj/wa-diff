__d(
  "WAWebVoipActionWriteCallLogCallStateChanged",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? yield r("WACommonTaskScheduler").yield()
            : yield o("WAPromiseDelays").releaseToEventLoop();
          try {
            var n,
              a,
              i = !r("isStringNullOrEmpty")(t.linkToken);
            if (t.creatorJid == null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator jid is null",
                  ])),
              );
              return;
            }
            var l = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: t.creatorJid,
                callId: t.callId,
                groupJid: t.groupJid,
                isCallLink: i,
                participants: t.participants.map(function (e) {
                  return e.jid;
                }),
              }),
              m = l.callCreatorUserWid,
              p = l.chatId,
              _ = l.fromMe,
              f = l.msgKeyId,
              g = l.participant,
              h = l.viewMode,
              y = new (r("WAWebMsgKey"))({
                remote: p,
                participant: g,
                fromMe: _,
                id: f,
              }),
              C = o("WAWebMsgCollection").MsgCollection.get(y);
            if (i) {
              if (C != null)
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: call link call log found with creator jid, token: ",
                        "",
                      ])),
                    t.linkToken,
                  ),
                  C
                );
              var b = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(t.callId);
              if (
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: call link ongoing call lookup, token: ",
                      ", found: ",
                      "",
                    ])),
                  t.linkToken,
                  b != null,
                ),
                b != null)
              )
                return b;
            }
            if (t.creatorDeviceJid == null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator device jid is null",
                  ])),
              );
              return;
            }
            var v = t.creatorDeviceJid,
              S = {
                id: y,
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: h,
                callOutcome: (function (e, n) {
                  return e == null ||
                    e === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
                    ? o("WAWebCallLogUtils").getCallOutcomeFromCallState(
                        t.callState,
                      )
                    : (n = C == null ? void 0 : C.callOutcome) != null
                      ? n
                      : o("WAWebCallLogUtils").getCallOutcomeFromCallState(
                          t.callState,
                        );
                })(C == null ? void 0 : C.callOutcome),
                isVideoCall: t.videoEnabled,
                callCreator: v,
                from: m,
                to: p,
                t:
                  (n = C == null ? void 0 : C.t) != null
                    ? n
                    : o("WATimeUtils").unixTime(),
                callDuration:
                  (a = C == null ? void 0 : C.callDuration) != null ? a : 0,
                callParticipants: t.participants.map(function (e) {
                  return { participant: e.jid, outcome: e.state };
                }),
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallResultNative(
                  t.callResult,
                  t.callDuration,
                ),
              };
            return o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(p, S, !1, !0);
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: callStateChanged: ",
                    "",
                  ])),
                e,
              )
              .tags("voip")
              .sendLogs("voip: writeCallLog: callStateChanged");
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallStateChangedEvent = m;
  },
  98,
);
