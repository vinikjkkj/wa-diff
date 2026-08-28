__d(
  "ZenonMWThriftRemoveParticipantsTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = { usersToRemove: new Set(t.participants) };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { removeParticipantsRequest: n },
        type: o("MultiwayCommonTypes").MessageType.REMOVE_PARTICIPANTS,
      });
    }
    l.toThriftRemoveParticipantsRequest = e;
  },
  98,
);
