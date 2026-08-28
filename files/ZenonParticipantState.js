__d(
  "ZenonParticipantState",
  ["$InternalEnum", "ZenonCallsModelTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      UNKNOWN: 0,
      ADDING: 1,
      CONTACTING: 2,
      RINGING: 3,
      ACCEPTING: 4,
      PRECONNECTING: 5,
      CONNECTING: 6,
      CONNECTED: 7,
      REMOVING: 8,
      DISCONNECTED: 9,
      NO_ANSWER: 10,
      REJECTED: 11,
      UNREACHABLE: 12,
      CONNECTION_DROPPED: 13,
      PARTICIPANT_LIMIT_REACHED: 14,
      IN_ANOTHER_CALL: 15,
      RING_TYPE_UNSUPPORTED: 16,
      PENDING_APPROVAL: 17,
      APPROVING: 18,
      DENYING: 19,
      APPROVED: 20,
      FAILED_APPROVAL: 21,
      HANGUP_IN_WAITING_ROOM: 22,
      RECONNECTING: 23,
    });
    function s(t) {
      if (t == null)
        return o("ZenonCallsModelTypes").ZenonCallParticipantState.Disconnected;
      switch (t) {
        case e.CONTACTING:
        case e.PRECONNECTING:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState.Contacting;
        case e.RINGING:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState.Ringing;
        case e.CONNECTING:
        case e.RECONNECTING:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState.Connecting;
        case e.CONNECTED:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState.Connected;
        case e.PENDING_APPROVAL:
        case e.APPROVING:
        case e.DENYING:
        case e.ACCEPTING:
        case e.ADDING:
        case e.REMOVING:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState
            .PendingApproval;
        case e.APPROVED:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState.Approved;
        case e.FAILED_APPROVAL:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState
            .FailedApproval;
        case e.HANGUP_IN_WAITING_ROOM:
        case e.UNKNOWN:
        case e.DISCONNECTED:
        case e.NO_ANSWER:
        case e.REJECTED:
        case e.UNREACHABLE:
        case e.CONNECTION_DROPPED:
        case e.PARTICIPANT_LIMIT_REACHED:
        case e.IN_ANOTHER_CALL:
        case e.RING_TYPE_UNSUPPORTED:
          return o("ZenonCallsModelTypes").ZenonCallParticipantState
            .Disconnected;
      }
      return o("ZenonCallsModelTypes").ZenonCallParticipantState.Disconnected;
    }
    ((l.ZenonParticipantState = e), (l.toCallParticipantState = s));
  },
  98,
);
