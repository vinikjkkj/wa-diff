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
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
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
              i = t.GroupInfo,
              l = t.GroupJid,
              u = t.IsVideoCall,
              c = t.PeerUserJid,
              d = t.TimeElapsedSinceCallOffer;
            if (i != null) return;
            var m = c != null ? o("WAWebUserPrefsMeUser").isMeAccount(c) : !1,
              p = m
                ? o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                : o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
              _ = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(n),
              f,
              g;
            if (_ != null)
              ((f = babelHelpers.extends({}, _.toJSON(), {
                callOutcome: p,
                isVideoCall: u,
              })),
                (g = f.to),
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.remove(f.id));
            else if (c != null) {
              var h = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
                  callId: n,
                  peerWid: c,
                  groupJid: l,
                  callCreatorWid: c,
                }),
                y = h.chatId,
                C = h.msgKeyId,
                b = h.participant,
                v = h.viewMode;
              ((g = y),
                (f = {
                  id: new (r("WAWebMsgKey"))({
                    remote: g,
                    participant: b,
                    fromMe: m,
                    id: C,
                  }),
                  type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                  kind: "callLog",
                  callOutcome: p,
                  isVideoCall: u,
                  callParticipants:
                    a != null && a.length > 0
                      ? a.map(function (e) {
                          return { participant: e.jid, outcome: e.result };
                        })
                      : [
                          {
                            participant: c,
                            outcome: o("WAWebVoipWaCallEnums")
                              .CallParticipantState.Terminated,
                          },
                        ],
                  to: g,
                  from: c,
                  t: o("WATimeUtils").castToUnixTime(
                    d != null ? (Date.now() - d) / 1e3 : Date.now() / 1e3,
                  ),
                  viewMode: v,
                }));
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
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(g, f, !1);
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
    l.generateCallLogFromEventCallMissed = u;
  },
  98,
);
