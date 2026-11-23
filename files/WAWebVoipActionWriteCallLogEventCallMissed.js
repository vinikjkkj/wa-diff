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
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        "added_as_link_creator",
        "group_chat_add",
        "vc_init",
        "vc_wave",
        "vc_wave_all",
      ]);
    async function c(t) {
      var n = await o(
        "WAWebVoipCallLogWriteMutex",
      ).WACallLogWriteMutex.acquire();
      try {
        var a = t.CallId,
          i = t.CallParticipantInfos,
          l = t.CallTermReason,
          u = t.GroupInfo,
          c = t.GroupJid,
          m = t.IsVideoCall,
          f = t.PeerUserJid,
          g = t.SilenceReason,
          h = t.TimeElapsedSinceCallOffer,
          y = o("WATimeUtils").castToUnixTime(
            h != null ? (Date.now() - h) / 1e3 : Date.now() / 1e3,
          ),
          C = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(a);
        if (c != null && C == null) {
          if (
            !d({
              callId: a,
              callOfferTime: y,
              peerUserJid: f,
              silenceReason: g,
            })
          )
            return;
        } else if (c == null && u != null) return;
        var b = f != null ? o("WAWebUserUtils").isMeAccount(f) : !1,
          v = _(b, l),
          S,
          R;
        if (C != null)
          ((S = babelHelpers.extends({}, C.toJSON(), {
            callOutcome: v,
            isVideoCall: m,
          })),
            (R = S.to),
            c == null && !o("WAWebVoipAdHocCallLogs").isAdHocGroupCallLog(C)
              ? o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.remove(S.id)
              : (S = babelHelpers.extends({}, S, {
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                    .Ongoing,
                  finalCallOutcome: v,
                })));
        else if (f != null) {
          var L = await o("WAWebCallLogUtils").getCallLogTargetDetails({
              callId: a,
              peerWid: f,
              groupJid: c,
              callCreatorWid: f,
            }),
            E = L.chatId,
            k = L.msgKeyId,
            I = L.participant,
            T = L.viewMode;
          R = E;
          var D = p(y)
            ? o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME
            : T;
          S = babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                remote: R,
                participant: I,
                fromMe: b,
                id: k,
              }),
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: "callLog",
              callOutcome: v,
              isVideoCall: m,
              callParticipants:
                i != null && i.length > 0
                  ? i.map(function (e) {
                      return { participant: e.jid, outcome: e.result };
                    })
                  : [
                      {
                        participant: f,
                        outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                          .Terminated,
                      },
                    ],
              to: R,
              from: f,
            },
            c != null ? { author: I } : null,
            { t: y, viewMode: D },
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
        var x = await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).writeVoipCallLogMessageImpl(R, S, !1);
        x != null &&
          o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(a);
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
        n.release();
      }
    }
    function d(e) {
      var t = e.callId,
        n = e.callOfferTime,
        r = e.peerUserJid,
        a = e.silenceReason;
      return (
        r != null &&
        !m(a) &&
        !p(n) &&
        !o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(t)
      );
    }
    function m(e) {
      if (e == null) return !1;
      var t = o("WAWebCallLogUtils").getCallSilenceReason(e);
      return t != null && u.has(t);
    }
    function p(e) {
      return (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        !o("WATimeUtils").sameDay(e, o("WATimeUtils").unixTime())
      );
    }
    function _(e, t) {
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
    l.generateCallLogFromEventCallMissed = c;
  },
  98,
);
