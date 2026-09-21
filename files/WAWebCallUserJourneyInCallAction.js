__d(
  "WAWebCallUserJourneyInCallAction",
  ["WAWebCallUserJourneyLogger", "WAWebWamEnumTsSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logAction({
        callActionType: e,
        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.IN_CALL_UI,
      });
    }
    l.logInCallAction = e;
  },
  98,
);
