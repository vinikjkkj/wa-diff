__d(
  "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebMsgGetters",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipAdHocCallLogs",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      var n = await o(
        "WAWebVoipCallLogWriteMutex",
      ).WACallLogWriteMutex.acquire();
      try {
        var r = t.CallId,
          a = t.CallParticipants,
          i = o("WAWebVoipAdHocCallLogs").getCallLogMsgsForCall(r, {
            includeEndedCall: !1,
            includeUntracked: !0,
          });
        if (i.length === 0) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromEventGroupInfoChanged: no call log for ",
                "",
              ])),
            r,
          );
          return;
        }
        await o("WAWebVoipAdHocCallLogs").settleAllOrThrow(
          i.map(function (e) {
            var t,
              n = babelHelpers.extends({}, e.toJSON(), {
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
                callParticipants:
                  (t =
                    a == null
                      ? void 0
                      : a.map(function (e) {
                          return {
                            participant: e.participant,
                            outcome: e.outcome,
                          };
                        })) != null
                    ? t
                    : e.callParticipants,
              });
            return o("WAWebVoipActionWriteCallLogImpl")
              .writeVoipCallLogMessageImpl(n.to, n, !1)
              .then(function (e) {
                e != null &&
                  o("WAWebMsgGetters").getIsGroupCall(e) &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.add(e, { merge: !0 });
              });
          }),
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromEventGroupInfoChanged failed: ",
                "",
              ])),
            e,
          )
          .tags("nexus-voip")
          .sendLogs("generate-call-log-event-group-info-changed-failed");
      } finally {
        n.release();
      }
    }
    l.generateCallLogFromEventGroupInfoChanged = u;
  },
  98,
);
