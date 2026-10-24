__d(
  "WAWebVoipActionWriteCallLogCallStateChanged",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebReleaseToEventLoop",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipCallStateUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
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
                t: o(
                  "WAWebVoipCallLogTimestamp",
                ).resolveCallLogTimestampFromOfferTime(r.offerEpochTimeMs),
                callDuration: 0,
                callParticipants: r.participants.map(function (e) {
                  return { participant: e.jid, outcome: e.state };
                }),
                finalCallOutcome: o(
                  "WAWebCallLogUtils",
                ).getCallOutcomeFromCallLogResult(r.callResult, r.callDuration),
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
            : o("WAWebCallLogUtils").getCallOutcomeFromCallLogResult(
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
    function y(e, t, n) {
      return n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        e.isJoinableGroupCall &&
        !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        t != null &&
        t.length > 0
        ? t
        : e.participants.map(function (e) {
            return { participant: e.jid, outcome: e.state };
          });
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = !r("isStringNullOrEmpty")(e.linkToken);
            if (
              (yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              e.creatorJid == null)
            ) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator jid is null",
                  ])),
              );
              return;
            }
            var n = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                callCreatorWid: e.creatorJid,
                callId: e.callId,
                groupJid: e.groupJid,
                isCallLink: t,
                participants: e.participants.map(function (e) {
                  return e.jid;
                }),
              }),
              a = n.callCreatorUserWid,
              i = n.chatId,
              l = n.fromMe,
              s = n.msgKeyId,
              u = n.participant,
              f = n.viewMode,
              C = new (r("WAWebMsgKey"))({
                remote: i,
                participant: u,
                fromMe: l,
                id: s,
              });
            if (t) {
              var b = o("WAWebMsgCollection").MsgCollection.get(C);
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
                    callCreatorUserWid: a,
                    callInfo: e,
                    chatId: i,
                    id: C,
                    viewMode: f,
                  });
            }
            if (e.creatorDeviceJid == null) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: skipping call log, creator device jid is null",
                  ])),
              );
              return;
            }
            var S = e.creatorDeviceJid,
              R = e.isJoinableGroupCall
                ? yield o(
                    "WAWebVoipCallLogWriteMutex",
                  ).WACallLogWriteMutex.acquire()
                : null;
            try {
              var L,
                E = o("WAWebMsgCollection").MsgCollection.get(C),
                k = v(e, E == null ? void 0 : E.callOutcome);
              o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(
                  e.callId,
                );
              var I = {
                  id: C,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: f,
                  callOutcome: g(e, k),
                  isVideoCall: e.videoEnabled,
                  callCreator: S,
                  from: a,
                  to: i,
                  t:
                    (L = E == null ? void 0 : E.t) != null
                      ? L
                      : o(
                          "WAWebVoipCallLogTimestamp",
                        ).resolveCallLogTimestampFromOfferTime(
                          e.offerEpochTimeMs,
                        ),
                  callDuration: h(e, E == null ? void 0 : E.callDuration),
                  callParticipants: y(
                    e,
                    E == null ? void 0 : E.callParticipants,
                    k,
                  ),
                  finalCallOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallLogResult(
                    e.callResult,
                    e.callDuration,
                  ),
                },
                T =
                  E != null &&
                  !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState),
                D = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(i, I, !1, !0, T);
              return (
                D != null &&
                  o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                  o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                    e.callId,
                  ),
                D
              );
            } finally {
              R == null || R.release();
            }
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n =
        o("WAWebVoipCallStateUtils").isCallConnected(e.callState) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(e.callId) &&
        t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return n ? null : t;
    }
    ((l.resolveCallOutcome = g),
      (l.resolveCallLogDuration = h),
      (l.resolveCallParticipants = y),
      (l.generateCallLogFromCallStateChangedEvent = C));
  },
  98,
);
