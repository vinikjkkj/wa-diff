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
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallLogTimestamp",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipCallStateUtils",
    "WAWebVoipLiveRootCallLogState",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    async function h(t) {
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
    function y(e, t) {
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
    function C(e, t) {
      return o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        e.callDuration > 0
        ? Math.floor(e.callDuration / 1e3)
        : t != null
          ? t
          : 0;
    }
    function b(e, t, n) {
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
        ? v(r, t)
        : r;
    }
    function v(e, t) {
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
    async function S(e) {
      o("WAWebVoipLiveRootCallLogState").noteNativeRootCallState(e);
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
          a = t || e.groupJid != null ? x(n) : $(e.callId, n),
          i = a.callCreatorUserWid,
          l = a.chatId,
          s = a.id,
          u = a.viewMode;
        if (t) {
          var g = o("WAWebMsgCollection").MsgCollection.get(s);
          return g != null
            ? (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: call link call log found with creator jid, token: ",
                    "",
                  ])),
                e.linkToken,
              ),
              g)
            : h({
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
        var y = e.creatorDeviceJid,
          v = o(
            "WAWebVoipCallLogTimestamp",
          ).resolveCallLogTimestampFromOfferTime(e.offerEpochTimeMs),
          S =
            e.isJoinableGroupCall ||
            (e.isGroupCall &&
              o("WAWebVoipCallStateUtils").isCallTerminal(e.callState)),
          T = await R(S, e, l, s, u),
          D = S
            ? await o(
                "WAWebVoipCallLogWriteMutex",
              ).WACallLogWriteMutex.acquire()
            : null;
        try {
          var N,
            M = o("WAWebMsgCollection").MsgCollection.get(s),
            w = P(e, M == null ? void 0 : M.callOutcome);
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
          var A = (N = M == null ? void 0 : M.t) != null ? N : v,
            F = {
              id: s,
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              viewMode: await o(
                "WAWebVoipActionWriteCallLogImpl",
              ).getOutOfOrderSafeCallLogViewMode({
                chatId: l,
                isNonTerminalCall: !o("WAWebVoipCallStateUtils").isCallTerminal(
                  e.callState,
                ),
                msgKey: s,
                preparedOrderingPolicy: T,
                t: A,
                viewMode: u,
              }),
              callOutcome: k(e, M, w, D != null),
              isVideoCall: e.videoEnabled,
              callCreator: y,
              from: i,
              to: l,
              t: A,
              callDuration: C(e, M == null ? void 0 : M.callDuration),
              callParticipants: b(
                e,
                M == null ? void 0 : M.callParticipants,
                w,
              ),
              finalCallOutcome: o(
                "WAWebCallLogUtils",
              ).getCallOutcomeFromCallLogResult(e.callResult, e.callDuration),
            },
            O =
              M != null &&
              !o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
              !I(M, F);
          o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
            !s.fromMe &&
            !l.isGroup() &&
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip-order] producer=terminal-state callId=",
                  " rootId=",
                  " state=",
                  " offerT=",
                  " inputT=",
                  " model=",
                  " view=",
                  " outcome=",
                  "",
                ])),
              e.callId,
              s.id,
              e.callState,
              v,
              A,
              M != null,
              F.viewMode,
              F.callOutcome,
            );
          var B = await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(l, F, !1, !0, O);
          if (
            (o("WAWebVoipLiveRootCallLogState").applyNativeDeviceSwitchFlag(
              B,
              F,
            ),
            B != null &&
              o("WAWebVoipCallStateUtils").isCallTerminal(e.callState))
          ) {
            o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(e.callId);
            var W = E(e, s);
            o("WAWebVoipActionWriteCallLogImpl")
              .waitForEagerCallLogPersist(s)
              .then(function () {
                return L(e, s, W);
              });
          }
          return B;
        } finally {
          D == null || D.release();
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: writeCallLog: callStateChanged: ",
                "",
              ])),
            e,
          )
          .tags("voip")
          .sendLogs("voip: writeCallLog: callStateChanged");
      }
    }
    async function R(e, t, n, a, i) {
      if (e)
        try {
          return i !== o("WAWebViewMode.flow").ViewModeType.VISIBLE ||
            a.fromMe ||
            n.isGroup() ||
            o(
              "WAWebVoipCallLogPlaceholderTracker",
            ).isOfflineCallLogOrderingEnabled() ||
            !o("WAWebVoipCallStateUtils").isCallTerminal(t.callState)
            ? { policy: null }
            : {
                policy: await o(
                  "WAWebVoipUnresolvedPlaceholderLoadable",
                ).loadCallLogOrderingPolicy(),
              };
        } catch (e) {
          return (
            o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log ordering policy not loaded",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            { policy: null }
          );
        }
    }
    function L(e, t, n) {
      if (n != null && !t.fromMe && !e.isGroupCall) {
        o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).scheduleSwitchEntryCallLogRepair(t, n, !0);
        return;
      }
      o(
        "WAWebVoipUnresolvedPlaceholderLoadable",
      ).scheduleSwitchEntryCallLogRepair(t, n);
    }
    function E(e, t) {
      var n = e.callId,
        r = e.offerEpochTimeMs;
      return t.id === n && Number.isFinite(r) && r > 0
        ? o("WAWebVoipCallLogTimestamp").resolveCallLogTimestampFromOfferTime(r)
        : null;
    }
    function k(e, t, n, r) {
      var a =
        r &&
        t != null &&
        o("WAWebVoipCallStateUtils").isCallTerminal(e.callState) &&
        (e.groupJid != null ||
          o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(t)) &&
        o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.get(
          t.id,
        ) != null;
      return a ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing : y(e, n);
    }
    function I(e, t) {
      return (
        e.callOutcome !== t.callOutcome ||
        e.finalCallOutcome !== t.finalCallOutcome ||
        !T(e.callParticipants, t.callParticipants)
      );
    }
    function T(e, t) {
      var n = D(e),
        r = D(t);
      return (
        n.size === r.size &&
        Array.from(r).every(function (e) {
          var t = e[0],
            r = e[1];
          return n.get(t) === r;
        })
      );
    }
    function D(e) {
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
    function x(e) {
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
    function $(e, t) {
      var n,
        r = x(t),
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
    function P(e, t) {
      var n =
        o("WAWebVoipCallStateUtils").isCallConnected(e.callState) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(e.callId) &&
        t !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return n ? null : t;
    }
    ((l.resolveCallOutcome = y),
      (l.resolveCallLogDuration = C),
      (l.resolveCallParticipants = b),
      (l.generateCallLogFromCallStateChangedEvent = S));
  },
  98,
);
