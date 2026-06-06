__d(
  "WAWebVoipActionWriteCallLogCallStateChanged",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogAnrGating",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipCallStateUtils",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = yield o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
            try {
              var c;
              if (
                o("WAWebVoipCallStateUtils").isCallTerminal(t.callState) &&
                o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(
                  t.callId,
                )
              ) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skip call link create, terminal+processed ",
                      "",
                    ])),
                  t.callId,
                );
                return;
              }
              var d = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(t.callId);
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: call link ongoing call lookup, token: ",
                      ", found: ",
                      "",
                    ])),
                  t.linkToken,
                  d != null,
                ),
                d != null)
              )
                return d;
              if (t.creatorDeviceJid == null) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skipping call log, creator device jid is null",
                    ])),
                );
                return;
              }
              var m = t.creatorDeviceJid,
                p = {
                  id: n,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: i,
                  callOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallState(t.callState),
                  isVideoCall: t.videoEnabled,
                  isCallLink: !0,
                  callLinkToken: (c = t.linkToken) != null ? c : "",
                  callCreator: m,
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
                _ = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(a, p, !1, !0);
              return (
                _ != null &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.add(_, { merge: !0 }),
                _
              );
            } finally {
              l.release();
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          try {
            var t,
              n,
              a = !r("isStringNullOrEmpty")(e.linkToken);
            if (e.creatorJid == null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
              u = i.fromMe,
              f = i.msgKeyId,
              g = i.participant,
              h = i.viewMode,
              y = new (r("WAWebMsgKey"))({
                remote: s,
                participant: g,
                fromMe: u,
                id: f,
              }),
              C = o("WAWebMsgCollection").MsgCollection.get(y);
            if (a)
              return C != null
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: call link call log found with creator jid, token: ",
                        "",
                      ])),
                    e.linkToken,
                  ),
                  C)
                : _(e, y, l, s, h);
            if (e.creatorDeviceJid == null) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
              },
              S =
                o(
                  "WAWebVoipCallLogAnrGating",
                ).isWebVoipCallLogAnrOptimizationEnabled() &&
                C != null &&
                !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState);
            return o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(s, v, !1, !0, S);
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: callStateChanged: ",
                    "",
                  ])),
                e,
              )
              .tags("voip")
              .sendLogs("voip: writeCallLog: callStateChanged");
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.generateCallLogFromCallStateChangedEvent = g;
  },
  98,
);
