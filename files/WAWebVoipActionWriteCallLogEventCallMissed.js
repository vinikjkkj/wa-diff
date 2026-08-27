__d(
  "WAWebVoipActionWriteCallLogEventCallMissed",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
    "asyncToGeneratorRuntime",
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebVoipCallLogWriteMutex",
          ).WACallLogWriteMutex.acquire();
          try {
            var a = t.CallId,
              i = t.CallParticipantInfos,
              l = t.CallTermReason,
              u = t.GroupInfo,
              c = t.GroupJid,
              d = t.IsVideoCall,
              p = t.PeerUserJid,
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
                !m({
                  callId: a,
                  callOfferTime: y,
                  peerUserJid: p,
                  silenceReason: g,
                })
              )
                return;
            } else if (c == null && u != null) return;
            var b = p != null ? o("WAWebUserPrefsMeUser").isMeAccount(p) : !1,
              v = f(b, l),
              S,
              R;
            if (C != null)
              ((S = babelHelpers.extends({}, C.toJSON(), {
                callOutcome: v,
                isVideoCall: d,
              })),
                (R = S.to),
                c == null &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.remove(S.id));
            else if (p != null) {
              var L = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callId: a,
                  peerWid: p,
                  groupJid: c,
                  callCreatorWid: p,
                }),
                E = L.chatId,
                k = L.msgKeyId,
                I = L.participant,
                T = L.viewMode;
              R = E;
              var D = _(y)
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
                  isVideoCall: d,
                  callParticipants:
                    i != null && i.length > 0
                      ? i.map(function (e) {
                          return { participant: e.jid, outcome: e.result };
                        })
                      : [
                          {
                            participant: p,
                            outcome: o("WAWebVoipWaCallEnums")
                              .CallParticipantState.Terminated,
                          },
                        ],
                  to: R,
                  from: p,
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
            var x = yield o(
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.callId,
        n = e.callOfferTime,
        r = e.peerUserJid,
        a = e.silenceReason;
      return (
        r != null &&
        !p(a) &&
        !_(n) &&
        !o("WAWebVoipActionWriteCallLogImpl").isCallIdAlreadyProcessed(t)
      );
    }
    function p(e) {
      if (e == null) return !1;
      var t = o("WAWebCallLogUtils").getCallSilenceReason(e);
      return t != null && u.has(t);
    }
    function _(e) {
      return (
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        !o("WATimeUtils").sameDay(e, o("WATimeUtils").unixTime())
      );
    }
    function f(e, t) {
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
