__d(
  "CountdownTimerStateCountdownTimerStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        START: 1,
        PAUSE: 2,
        END: 3,
        CANCEL: 4,
        PING: 5,
      }),
      l = n("$InternalEnum")({
        UNKNOWN: 0,
        STARTED: 1,
        PAUSED: 2,
        ENDED: 3,
        CANCELLED: 4,
      });
    a.exports = { CountdownTimerActionEvent: e, CountdownTimerStatus: l };
  },
  null,
);
