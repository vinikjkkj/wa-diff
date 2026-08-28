__d(
  "ZenonMWThriftAddParticipantsTranslator",
  [
    "MultiwayCommonTypes",
    "RequestStreamBodyUtils",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "new_room_context";
    function s(t, n) {
      var r = { usersToInvite: new Set(n.participants) };
      if (n.groupThreadId != null) {
        var a = { calling_tags: 2, group_thread_id: n.groupThreadId };
        if (a) {
          var i = [
            {
              body: {
                genericMessage: {
                  data: o("RequestStreamBodyUtils").stringToUint8Array(
                    JSON.stringify(a),
                  ),
                  topic: e,
                },
              },
              header: { topic_DEPRECATED: e },
            },
          ];
          r.appMessages = i;
        }
      }
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: t,
        rtcMessageBody: { addParticipantsRequest: r },
        type: o("MultiwayCommonTypes").MessageType.ADD_PARTICIPANTS,
      });
    }
    ((l.NEW_ROOM_CONTEXT = e), (l.toThriftAddParticipantsRequest = s));
  },
  98,
);
