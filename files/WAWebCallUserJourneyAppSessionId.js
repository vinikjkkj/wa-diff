__d(
  "WAWebCallUserJourneyAppSessionId",
  ["WAWebCallUserJourneyGating", "WAWebGetSharedSessionId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        ? o("WAWebGetSharedSessionId").getSharedSessionId()
        : e;
    }
    l.callUserJourneyAppSessionId = e;
  },
  98,
);
