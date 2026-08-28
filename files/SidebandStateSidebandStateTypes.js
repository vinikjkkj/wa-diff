__d(
  "SidebandStateSidebandStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        UNKNOWN: 0,
        CREATE_CONVERSATION: 1,
        LEAVE_CONVERSATION: 2,
        SEND_AC_WAVE: 3,
        CANCEL_AC_WAVE: 4,
        ACCEPT_AC_WAVE: 5,
        REJECT_AC_WAVE: 6,
        UPDATE_AVAILABILITY: 7,
        JOIN_EXISTING_AC: 8,
        RESPOND_TO_AC_WAVE: 9,
        CREATE_SOLO_CONVERSATION: 10,
        SET_CONVERSATION_CONTEXT: 11,
      }),
      s = e({ UNKNOWN: 0, AVAILABLE: 1, NOT_AVAILABLE: 2, IN_A_MEETING: 3 }),
      u = e({ UNKNOWN: 0, QUICK_QUESTION: 1, LETS_CHAT: 2 }),
      c = e({ UNKNOWN: 0, NEED_A_MINUTE: 1 }),
      d = e({ UNKNOWN: 0, REJECTED: 1 });
    a.exports = {
      SidebandActionType: l,
      SidebandUserAvailability: s,
      SidebandWaveResponderMessage: c,
      SidebandWaveSenderMessage: u,
      SidebandWaveStatus: d,
    };
  },
  null,
);
