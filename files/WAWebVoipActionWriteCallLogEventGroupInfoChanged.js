__d(
  "WAWebVoipActionWriteCallLogEventGroupInfoChanged",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = await o(
        "WAWebVoipCallLogWriteMutex",
      ).WACallLogWriteMutex.acquire();
      try {
        var a,
          i = t.CallId,
          l = t.CallParticipants,
          s = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(i);
        if (s == null)
          throw r("err")(
            "generateCallLogFromEventGroupInfoChanged: Expected to find existing ongoing call",
          );
        var u = babelHelpers.extends({}, s.toJSON(), {
            callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
            callParticipants:
              (a =
                l == null
                  ? void 0
                  : l.map(function (e) {
                      return { participant: e.participant, outcome: e.outcome };
                    })) != null
                ? a
                : s.callParticipants,
          }),
          c = u.to,
          d = await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(c, u, !1);
        d &&
          o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.add(d, { merge: !0 });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "generateCallLogFromEventGroupInfoChanged failed: ",
                "",
              ])),
            t,
          )
          .tags("nexus-voip")
          .sendLogs("generate-call-log-event-group-info-changed-failed");
      } finally {
        n.release();
      }
    }
    l.generateCallLogFromEventGroupInfoChanged = s;
  },
  98,
);
