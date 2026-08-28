__d(
  "RaisedHandsQueueStateRaisedHandsQueueStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        UNKNOWN: 0,
        JOIN: 1,
        LEAVE: 2,
        E2EE_STATE_CLONE: 3,
        PREFER_RTSS: 4,
        SWITCH_FROM_RTSS: 5,
        ROLL_CALL: 6,
        ROLL_CALL_END: 7,
        ROLL_CALL_NEXT: 8,
      }),
      l = n("$InternalEnum")({
        UNKNOWN: 0,
        CLASS_ROOM: 1,
        WORKPLACE: 2,
        MESSENGER: 3,
      }),
      s = n("$InternalEnum")({ UNKNOWN: 0, HIDDEN: 1, VISIBLE: 2 });
    a.exports = {
      CallType: l,
      RaisedHandsQueueParticipantRequestType: e,
      RaisedHandsQueuerState: s,
    };
  },
  null,
);
