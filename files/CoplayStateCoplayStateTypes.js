__d(
  "CoplayStateCoplayStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({ STARTED: 1, ENDED: 2, FORCE_END: 3 }),
      l = n("$InternalEnum")({
        PENDING: 1,
        RUNNING: 2,
        CONCLUDED: 3,
        ABANDONED: 4,
      }),
      s = n("$InternalEnum")({ UNKNOWN: 0, STATUS_CHANGE: 1 });
    a.exports = {
      CoplayConferenceInputEvent: s,
      CoplayMatchEvent: e,
      CoplayMatchStatus: l,
    };
  },
  null,
);
