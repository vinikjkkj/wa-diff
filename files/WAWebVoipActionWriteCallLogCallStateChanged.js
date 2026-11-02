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
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
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
    function y(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        e.callDuration > 0
        ? Math.floor(e.callDuration / 1e3)
        : t != null
          ? t
          : 0;
    }
    function C(e, t, n) {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              g = n.viewMode,
              b = new (r("WAWebMsgKey"))({
                remote: i,
                participant: u,
                fromMe: l,
                id: s,
              });
            if (t) {
              var v = o("WAWebMsgCollection").MsgCollection.get(b);
              return v != null
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: call link call log found with creator jid, token: ",
                        "",
                      ])),
                    e.linkToken,
                  ),
                  v)
                : f({
                    callCreatorUserWid: a,
                    callInfo: e,
                    chatId: i,
                    id: b,
                    viewMode: g,
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
            var R = e.creatorDeviceJid,
              L = e.isJoinableGroupCall
                ? yield o(
                    "WAWebVoipCallLogWriteMutex",
                  ).WACallLogWriteMutex.acquire()
                : null;
            try {
              var E,
                k = o("WAWebMsgCollection").MsgCollection.get(b),
                I = S(e, k == null ? void 0 : k.callOutcome);
              if (
                o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                (o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(
                  e.callId,
                ),
                o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(
                  e.callId,
                ))
              ) {
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skipping call log for failed transfer segment ",
                      "",
                    ])),
                  e.callId,
                ),
                  o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                    e.callId,
                  ));
                return;
              }
              var T = {
                  id: b,
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: o("WAWebMsgType").MsgKind.CallLog,
                  viewMode: g,
                  callOutcome: h(e, I),
                  isVideoCall: e.videoEnabled,
                  callCreator: R,
                  from: a,
                  to: i,
                  t:
                    (E = k == null ? void 0 : k.t) != null
                      ? E
                      : o(
                          "WAWebVoipCallLogTimestamp",
                        ).resolveCallLogTimestampFromOfferTime(
                          e.offerEpochTimeMs,
                        ),
                  callDuration: y(e, k == null ? void 0 : k.callDuration),
                  callParticipants: C(
                    e,
                    k == null ? void 0 : k.callParticipants,
                    I,
                  ),
                  finalCallOutcome: o(
                    "WAWebCallLogUtils",
                  ).getCallOutcomeFromCallLogResult(
                    e.callResult,
                    e.callDuration,
                  ),
                },
                D =
                  k != null &&
                  !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState),
                x = yield o(
                  "WAWebVoipActionWriteCallLogImpl",
                ).writeVoipCallLogMessageImpl(i, T, !1, !0, D);
              return (
                x != null &&
                  o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
                  o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                    e.callId,
                  ),
                x
              );
            } finally {
              L == null || L.release();
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: callStateChanged: ",
                    "",
                  ])),
                e,
              )
              .tags("voip")
              .sendLogs("voip: writeCallLog: callStateChanged");
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n =
        o("WAWebVoipCallStateUtils").isCallConnected(e.callState) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(e.callId) &&
        t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return n ? null : t;
    }
    ((l.resolveCallOutcome = h),
      (l.resolveCallLogDuration = y),
      (l.resolveCallParticipants = C),
      (l.generateCallLogFromCallStateChangedEvent = b));
  },
  98,
);
