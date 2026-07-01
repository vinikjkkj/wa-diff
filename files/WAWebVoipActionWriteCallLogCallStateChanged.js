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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.callCreatorUserWid,
            r = t.callInfo,
            a = t.chatId,
            i = t.id,
            l = t.viewMode,
            c = yield o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
          try {
            var d;
            if (
              o("WAWebVoipCallStateUtils").isCallTerminal(r.callState) &&
              o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(
                r.callId,
              )
            ) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skip call link create, terminal+processed ",
                    "",
                  ])),
                r.callId,
              );
              return;
            }
            var m = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(r.callId);
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: call link ongoing call lookup, token: ",
                    ", found: ",
                    "",
                  ])),
                r.linkToken,
                m != null,
              ),
              m != null)
            )
              return m;
            if (r.creatorDeviceJid == null) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator device jid is null",
                  ])),
              );
              return;
            }
            var p = r.creatorDeviceJid,
              _ = {
                id: i,
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: l,
                callOutcome: o("WAWebCallLogUtils").getCallOutcomeFromCallState(
                  r.callState,
                ),
                isVideoCall: r.videoEnabled,
                isCallLink: !0,
                callLinkToken: (d = r.linkToken) != null ? d : "",
                callCreator: p,
                from: n,
                to: a,
                t: o("WATimeUtils").unixTime(),
                callDuration: 0,
                callParticipants: r.participants.map(function (e) {
                  return { participant: e.jid, outcome: e.state };
                }),
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallResultNative(
                  r.callResult,
                  r.callDuration,
                ),
              },
              f = yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(a, _, !1, !0);
            return (
              f != null &&
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.add(f, { merge: !0 }),
              f
            );
          } finally {
            c.release();
          }
        })),
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
                : _({
                    callCreatorUserWid: l,
                    callInfo: e,
                    chatId: s,
                    id: y,
                    viewMode: h,
                  });
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
                !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState),
              R = yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(s, v, !1, !0, S);
            return (
              R != null &&
                o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                  e.callId,
                ),
              R
            );
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
