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
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipAdHocCallLogs",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipCallStateUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n = t.callCreatorUserWid,
        r = t.callInfo,
        a = t.chatId,
        i = t.id,
        l = t.viewMode,
        c = await o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
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
          f = await o(
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
      if (
        n === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        e.isJoinableGroupCall &&
        !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        t != null &&
        t.length > 0
      )
        return t;
      var r = e.participants.map(function (e) {
        return { participant: e.jid, outcome: e.state };
      });
      return e.isGroupCall &&
        o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        t != null
        ? C(r, t)
        : r;
    }
    function C(e, t) {
      var n = new Map();
      t.forEach(function (e) {
        var t,
          r = o("WAWebCallLogUtils").getCallParticipantKey(e.participant);
        ((t = n.get(r)) == null ? void 0 : t.outcome) !==
          o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
          n.set(r, e);
      });
      var r = e.map(function (e) {
        var t = o("WAWebCallLogUtils").getCallParticipantKey(e.participant),
          r = n.get(t);
        return (
          n.delete(t),
          (r == null ? void 0 : r.outcome) ===
          o("WAWebVoipWaCallEnums").CallParticipantState.Connected
            ? babelHelpers.extends({}, e, {
                outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                  .Connected,
              })
            : e
        );
      });
      return [].concat(r, Array.from(n.values()));
    }
    async function b(e) {
      try {
        var t = !r("isStringNullOrEmpty")(e.linkToken);
        if (
          (await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
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
        var n = await o("WAWebCallLogUtils").getCallLogTargetDetails({
            callCreatorWid: e.creatorJid,
            callId: e.callId,
            groupJid: e.groupJid,
            isCallLink: t,
            participants: e.participants.map(function (e) {
              return e.jid;
            }),
          }),
          a = t || e.groupJid != null ? L(n) : E(e.callId, n),
          i = a.callCreatorUserWid,
          l = a.chatId,
          s = a.id,
          u = a.viewMode;
        if (t) {
          var C = o("WAWebMsgCollection").MsgCollection.get(s);
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
            : f({
                callCreatorUserWid: i,
                callInfo: e,
                chatId: l,
                id: s,
                viewMode: u,
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
        var b = e.creatorDeviceJid,
          S =
            e.isJoinableGroupCall ||
            (e.isGroupCall &&
              o("WAWebVoipCallStateUtils").isCallTerminal(e.callState))
              ? await o(
                  "WAWebVoipCallLogWriteMutex",
                ).WACallLogWriteMutex.acquire()
              : null;
        try {
          var R,
            I = o("WAWebMsgCollection").MsgCollection.get(s),
            T = k(e, I == null ? void 0 : I.callOutcome);
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
          var D = {
              id: s,
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              viewMode: u,
              callOutcome: g(e, T),
              isVideoCall: e.videoEnabled,
              callCreator: b,
              from: i,
              to: l,
              t:
                (R = I == null ? void 0 : I.t) != null
                  ? R
                  : o(
                      "WAWebVoipCallLogTimestamp",
                    ).resolveCallLogTimestampFromOfferTime(e.offerEpochTimeMs),
              callDuration: h(e, I == null ? void 0 : I.callDuration),
              callParticipants: y(
                e,
                I == null ? void 0 : I.callParticipants,
                T,
              ),
              finalCallOutcome: o(
                "WAWebCallLogUtils",
              ).getCallOutcomeFromCallLogResult(e.callResult, e.callDuration),
            },
            x =
              I != null &&
              !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
              !v(I, D),
            $ = await o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(l, D, !1, !0, x);
          return (
            $ != null &&
              o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
              o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(
                e.callId,
              ),
            $
          );
        } finally {
          S == null || S.release();
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
    }
    function v(e, t) {
      return (
        e.callOutcome !== t.callOutcome ||
        e.finalCallOutcome !== t.finalCallOutcome ||
        !S(e.callParticipants, t.callParticipants)
      );
    }
    function S(e, t) {
      var n = R(e),
        r = R(t);
      return (
        n.size === r.size &&
        Array.from(r).every(function (e) {
          var t = e[0],
            r = e[1];
          return n.get(t) === r;
        })
      );
    }
    function R(e) {
      var t = new Map();
      return (
        e == null ||
          e.forEach(function (e) {
            var n = e.outcome,
              r = e.participant,
              a = o("WAWebCallLogUtils").getCallParticipantKey(r);
            t.has(a) ||
              t.set(
                a,
                n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected,
              );
          }),
        t
      );
    }
    function L(e) {
      var t = e.callCreatorUserWid,
        n = e.chatId,
        o = e.fromMe,
        a = e.msgKeyId,
        i = e.participant,
        l = e.viewMode;
      return {
        callCreatorUserWid: t,
        chatId: n,
        id: new (r("WAWebMsgKey"))({
          remote: n,
          participant: i,
          fromMe: o,
          id: a,
        }),
        viewMode: l,
      };
    }
    function E(e, t) {
      var n,
        r = L(t),
        a = o("WAWebVoipAdHocCallLogs").getActiveCallLogMsg(e, t.msgKeyId);
      return a == null || a.id.equals(r.id)
        ? r
        : babelHelpers.extends({}, r, {
            chatId: a.id.remote,
            id: a.id,
            viewMode:
              (n = a.viewMode) != null
                ? n
                : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          });
    }
    function k(e, t) {
      var n =
        o("WAWebVoipCallStateUtils").isCallConnected(e.callState) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(e.callId) &&
        t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return n ? null : t;
    }
    ((l.resolveCallOutcome = g),
      (l.resolveCallLogDuration = h),
      (l.resolveCallParticipants = y),
      (l.generateCallLogFromCallStateChangedEvent = b));
  },
  98,
);
