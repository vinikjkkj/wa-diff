__d(
  "WAWebVoipActionWriteCallLogEventCallMissed",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipAdHocCallLogs",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Set([
        "added_as_link_creator",
        "group_chat_add",
        "vc_init",
        "vc_wave",
        "vc_wave_all",
      ]);
    async function d(t) {
      var n = t.TimeElapsedSinceCallOffer,
        a = o("WATimeUtils").castToUnixTime(
          o("WATimeUtils").unixTime() - (n != null ? n : 0) / 1e3,
        ),
        i = o("WATimeUtils").castToUnixTime(
          n != null ? (Date.now() - n) / 1e3 : Date.now() / 1e3,
        ),
        l = await m(t),
        u = await o("WAWebVoipCallLogWriteMutex").WACallLogWriteMutex.acquire();
      try {
        var c = t.CallId,
          d = t.CallParticipantInfos,
          _ = t.CallTermReason,
          y = t.GroupInfo,
          C = t.GroupJid,
          b = t.IsVideoCall,
          v = t.PeerUserJid,
          S = t.SilenceReason,
          R = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(c);
        if (C != null && R == null) {
          if (
            !p({
              callId: c,
              callOfferTime: i,
              peerUserJid: v,
              silenceReason: S,
            })
          )
            return;
        } else if (C == null && y != null) return;
        var L = v != null ? o("WAWebUserUtils").isMeAccount(v) : !1,
          E = h(L, _),
          k,
          I,
          T = null;
        if (R != null)
          ((k = babelHelpers.extends({}, R.toJSON(), {
            callOutcome: E,
            isVideoCall: b,
          })),
            (I = k.to),
            C == null && !o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(R)
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.remove(k.id)
              : (k = babelHelpers.extends({}, k, {
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  finalCallOutcome: E,
                })));
        else if (v != null) {
          var D = await o("WAWebCallLogUtils").getCallLogTargetDetails({
              callId: c,
              peerWid: v,
              groupJid: C,
              callCreatorWid: v,
            }),
            x = D.chatId,
            $ = D.msgKeyId,
            P = D.participant,
            N = D.viewMode;
          I = x;
          var M = new (r("WAWebMsgKey"))({
            remote: I,
            participant: P,
            fromMe: L,
            id: $,
          });
          T = f(M, c, n, a);
          var w = g(i)
              ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME
              : N,
            A = await o(
              "WAWebVoipActionWriteCallLogImpl",
            ).getOutOfOrderSafeCallLogViewMode({
              chatId: I,
              isNonTerminalCall: !1,
              msgKey: M,
              notificationViewMode: w,
              preparedOrderingPolicy: l,
              t: a,
              viewMode: N,
            }),
            F =
              A === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
                ? A
                : w;
          k = babelHelpers.extends(
            {
              id: M,
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: "callLog",
              callOutcome: E,
              isVideoCall: b,
              callParticipants:
                d != null && d.length > 0
                  ? d.map(function (e) {
                      return { participant: e.jid, outcome: e.result };
                    })
                  : [
                      {
                        participant: v,
                        outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                          .Terminated,
                      },
                    ],
              to: I,
              from: v,
            },
            C != null ? { author: P } : null,
            { t: i, viewMode: F },
          );
        } else {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[generateCallLogFromEventCallMissed] no PeerUserJid",
                ])),
            )
            .tags("nexus-voip")
            .sendLogs("generate-call-log-event=call-missed-no-peer");
          return;
        }
        var O = await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).writeVoipCallLogMessageImpl(I, k, !1);
        O != null &&
          (o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(c),
          o(
            "WAWebVoipUnresolvedPlaceholderLoadable",
          ).scheduleSwitchEntryCallLogRepair(k.id, T));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[generateCallLogFromEventCallMissed] call log gen failed: ",
                "",
              ])),
            e,
          )
          .tags("nexus-voip")
          .sendLogs("generate-call-log-event=call-missed");
      } finally {
        u.release();
      }
    }
    async function m(e) {
      var t = e.GroupInfo,
        n = e.GroupJid,
        a = e.PeerUserJid;
      try {
        return t != null ||
          n != null ||
          a == null ||
          o("WAWebUserUtils").isMeAccount(a) ||
          o(
            "WAWebVoipCallLogPlaceholderTracker",
          ).isOfflineCallLogOrderingEnabled()
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log ordering policy not loaded",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          { policy: null }
        );
      }
    }
    function p(e) {
      var t = e.callId,
        n = e.callOfferTime,
        r = e.peerUserJid,
        a = e.silenceReason;
      return (
        r != null &&
        !_(a) &&
        !g(n) &&
        !o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(t)
      );
    }
    function _(e) {
      if (e == null) return !1;
      var t = o("WAWebCallLogUtils").getCallSilenceReason(e);
      return t != null && c.has(t);
    }
    function f(e, t, n, r) {
      return e.id === t && n != null && Number.isFinite(n) && n >= 0 ? r : null;
    }
    function g(e) {
      return (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        !o("WATimeUtils").sameDay(e, o("WATimeUtils").unixTime())
      );
    }
    function h(e, t) {
      return e
        ? o("WAWebCallLogMsgData.flow").CallOutcome.Completed
        : t ===
              o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                .ACCEPTED_ELSEWHERE ||
            t === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH
          ? o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
          : t ===
              o("WAWebWamEnumCallTermReason").CALL_TERM_REASON
                .REJECTED_ELSEWHERE
            ? o("WAWebCallLogMsgData.flow").CallOutcome.Rejected
            : o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
    }
    l.generateCallLogFromEventCallMissed = d;
  },
  98,
);
