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
    "WAWebVoipWaCallEnums",
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
    function g(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(e.callState)
        ? e.callState ===
          o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
          ? o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
          : t != null &&
              t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
              t !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
            ? t
            : o("WAWebCallLogUtils").getCallOutcomeFromCallResultNative(
                e.callResult,
                e.callDuration,
              )
        : t == null || t === o("WAWebCallLogMsgData.flow").CallOutcome.Unknown
          ? o("WAWebCallLogUtils").getCallOutcomeFromCallState(e.callState)
          : t != null
            ? t
            : o("WAWebCallLogUtils").getCallOutcomeFromCallState(e.callState);
    }
    function h(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        e.callDuration > 0
        ? Math.floor(e.callDuration / 1e3)
        : t != null
          ? t
          : 0;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          try {
            var t,
              n = !r("isStringNullOrEmpty")(e.linkToken);
            if (e.creatorJid == null) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator jid is null",
                  ])),
              );
              return;
            }
            var a = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: e.creatorJid,
                callId: e.callId,
                groupJid: e.groupJid,
                isCallLink: n,
                participants: e.participants.map(function (e) {
                  return e.jid;
                }),
              }),
              i = a.callCreatorUserWid,
              l = a.chatId,
              s = a.fromMe,
              u = a.msgKeyId,
              f = a.participant,
              y = a.viewMode,
              C = new (r("WAWebMsgKey"))({
                remote: l,
                participant: f,
                fromMe: s,
                id: u,
              }),
              b = o("WAWebMsgCollection").MsgCollection.get(C);
            if (n)
              return b != null
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: call link call log found with creator jid, token: ",
                        "",
                      ])),
                    e.linkToken,
                  ),
                  b)
                : _({
                    callCreatorUserWid: i,
                    callInfo: e,
                    chatId: l,
                    id: C,
                    viewMode: y,
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
            var v = e.creatorDeviceJid,
              S = {
                id: C,
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: o("WAWebMsgType").MsgKind.CallLog,
                viewMode: y,
                callOutcome: g(e, b == null ? void 0 : b.callOutcome),
                isVideoCall: e.videoEnabled,
                callCreator: v,
                from: i,
                to: l,
                t:
                  (t = b == null ? void 0 : b.t) != null
                    ? t
                    : o("WATimeUtils").unixTime(),
                callDuration: h(e, b == null ? void 0 : b.callDuration),
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
              R =
                o(
                  "WAWebVoipCallLogAnrGating",
                ).isWebVoipCallLogAnrOptimizationEnabled() &&
                b != null &&
                !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState),
              L = yield o(
                "WAWebVoipActionWriteCallLogImpl",
              ).writeVoipCallLogMessageImpl(l, S, !1, !0, R);
            return (
              L != null &&
                o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                  e.callId,
                ),
              L
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
        C.apply(this, arguments)
      );
    }
    ((l.resolveCallOutcome = g),
      (l.resolveCallLogDuration = h),
      (l.generateCallLogFromCallStateChangedEvent = y));
  },
  98,
);
