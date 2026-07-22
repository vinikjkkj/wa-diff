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
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumCallTermReason",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.CallId,
              a = t.CallParticipantInfos,
              i = t.CallTermReason,
              l = t.GroupInfo,
              u = t.GroupJid,
              c = t.IsVideoCall,
              m = t.PeerUserJid,
              p = t.TimeElapsedSinceCallOffer;
            if (l != null) return;
            var _ = m != null ? o("WAWebUserPrefsMeUser").isMeAccount(m) : !1,
              f = d(_, i),
              g = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(n),
              h,
              y;
            if (g != null)
              ((h = babelHelpers.extends({}, g.toJSON(), {
                callOutcome: f,
                isVideoCall: c,
              })),
                (y = h.to),
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.remove(h.id));
            else if (m != null) {
              var C = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callId: n,
                  peerWid: m,
                  groupJid: u,
                  callCreatorWid: m,
                }),
                b = C.chatId,
                v = C.msgKeyId,
                S = C.participant,
                R = C.viewMode;
              y = b;
              var L = o("WATimeUtils").castToUnixTime(
                  p != null ? (Date.now() - p) / 1e3 : Date.now() / 1e3,
                ),
                E =
                  !o(
                    "WAWebVoipCallLogPlaceholderTracker",
                  ).isOfflineCallLogOrderingEnabled() &&
                  !o("WATimeUtils").sameDay(L, o("WATimeUtils").unixTime())
                    ? o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_OFFLINE_RESUME
                    : R;
              h = {
                id: new (r("WAWebMsgKey"))({
                  remote: y,
                  participant: S,
                  fromMe: _,
                  id: v,
                }),
                type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                kind: "callLog",
                callOutcome: f,
                isVideoCall: c,
                callParticipants:
                  a != null && a.length > 0
                    ? a.map(function (e) {
                        return { participant: e.jid, outcome: e.result };
                      })
                    : [
                        {
                          participant: m,
                          outcome: o("WAWebVoipWaCallEnums")
                            .CallParticipantState.Terminated,
                        },
                      ],
                to: y,
                from: m,
                t: L,
                viewMode: E,
              };
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
            var k = yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(y, h, !1);
            k != null &&
              o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(n);
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
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
    l.generateCallLogFromEventCallMissed = u;
  },
  98,
);
