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
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = yield o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
            try {
              var u,
                c = o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(t.callId);
              if (
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: call link ongoing call lookup, token: ",
                      ", found: ",
                      "",
                    ])),
                  t.linkToken,
                  c != null,
                ),
                c != null)
              )
                return c;
              if (t.creatorDeviceJid == null) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skipping call log, creator device jid is null",
                    ])),
                );
                return;
              }
              var d = t.creatorDeviceJid,
                m = {
                  id: n,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: i,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallState(t.callState),
                  isVideoCall: t.videoEnabled,
                  isCallLink: !0,
                  callLinkToken: (u = t.linkToken) != null ? u : "",
                  callCreator: d,
                  from: r,
                  to: a,
                  t: o("WATimeUtils").unixTime(),
                  callDuration: 0,
                  callParticipants: t.participants.map(function (e) {
                    return { participant: e.jid, outcome: e.state };
                  }),
                  finalCallOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallResultNative(
                    t.callResult,
                    t.callDuration,
                  ),
                },
                p = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(a, m, !1, !0);
              return (
                p != null &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.add(p, { merge: !0 }),
                p
              );
            } finally {
              l.release();
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? yield r("WACommonTaskScheduler").yield()
            : yield o("WAPromiseDelays").releaseToEventLoop();
          try {
            var t,
              n,
              a = !r("isStringNullOrEmpty")(e.linkToken);
            if (e.creatorJid == null) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator jid is null",
                  ])),
              );
              return;
            }
            var i = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: e.creatorJid,
                callId: e.callId,
                groupJid: e.groupJid,
                isCallLink: a,
                participants: e.participants.map(function (e) {
                  return e.jid;
                }),
              }),
              l = i.callCreatorUserWid,
              s = i.chatId,
              _ = i.fromMe,
              f = i.msgKeyId,
              g = i.participant,
              h = i.viewMode,
              y = new (r("WAWebMsgKey"))({
                remote: s,
                participant: g,
                fromMe: _,
                id: f,
              }),
              C = o("WAWebMsgCollection").MsgCollection.get(y);
            if (a)
              return C != null
                ? (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: call link call log found with creator jid, token: ",
                        "",
                      ])),
                    e.linkToken,
                  ),
                  C)
                : p(e, y, l, s, h);
            if (e.creatorDeviceJid == null) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator device jid is null",
                  ])),
              );
              return;
            }
            var b = e.creatorDeviceJid,
              v = {
                id: y,
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: h,
                callOutcome: (function (t, n) {
                  return t == null ||
                    t === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
                    ? o("WAWebCallLogUtils").getCallOutcomeFromCallState(
                        e.callState,
                      )
                    : (n = C == null ? void 0 : C.callOutcome) != null
                      ? n
                      : o("WAWebCallLogUtils").getCallOutcomeFromCallState(
                          e.callState,
                        );
                })(C == null ? void 0 : C.callOutcome),
                isVideoCall: e.videoEnabled,
                callCreator: b,
                from: l,
                to: s,
                t:
                  (t = C == null ? void 0 : C.t) != null
                    ? t
                    : o("WATimeUtils").unixTime(),
                callDuration:
                  (n = C == null ? void 0 : C.callDuration) != null ? n : 0,
                callParticipants: e.participants.map(function (e) {
                  return { participant: e.jid, outcome: e.state };
                }),
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallResultNative(
                  e.callResult,
                  e.callDuration,
                ),
              };
            return o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(s, v, !1, !0);
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: callStateChanged: ",
                    "",
                  ])),
                e,
              )
              .tags("voip")
              .sendLogs("voip: writeCallLog: callStateChanged");
          }
        })),
        g.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallStateChangedEvent = f;
  },
  98,
);
