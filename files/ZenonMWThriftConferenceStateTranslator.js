__d(
  "ZenonMWThriftConferenceStateTranslator",
  [
    "MultiwayCommonTypes",
    "RequestStreamBodyUtils",
    "ZenonMWMessageTypes",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageBody.conferenceStateRequest;
      if (n) {
        var r = n.appMessages,
          a = n.participantStates,
          i = {
            eventName: "participantUpdateRequest",
            participantStates: new Map(),
            sctpUserIdNodeIdMap: new Map(),
            versionId: +n.version,
          },
          l = {
            actorRepresentatives: new Map(),
            eventName: "clientInfoRequest",
            mediaPath: o("ZenonMWMessageTypes").ZenonMWMediaPath.UNKNOWN,
            userCapabilities: new Map(),
          };
        (Object.keys(a).forEach(function (e) {
          var t = a[e],
            n = t.sctpNodeId,
            r = t.state,
            s = t.userCapabilities;
          (i.participantStates.set(
            e,
            o("ZenonMWThriftTranslatorUtils").fromThriftParticipantState(r),
          ),
            n != null && i.sctpUserIdNodeIdMap.set(e, +n),
            l.userCapabilities.set(
              e,
              s ? o("RequestStreamBodyUtils").uint8ArrayToString(s) : "",
            ));
        }),
          t.push(i),
          t.push(l));
        var s = o(
          "ZenonMWThriftTranslatorUtils",
        ).getCollisionContextFromThriftAppMessages(r);
        if (s) {
          s.serverInfoData = e.messageHeader.serverInfoData;
          var u = { context: s, eventName: "roomContextUpdateRequest" };
          t.push(u);
        }
      }
      return t;
    }
    function s(e, t) {
      var n = { currentVersion: String(t.requestVersionId) };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: { conferenceStateResponse: n },
        type: o("MultiwayCommonTypes").MessageType.CONFERENCE_STATE,
      });
    }
    ((l.fromThriftConferenceStateRequest = e),
      (l.toThriftConferenceStateResponse = s));
  },
  98,
);
