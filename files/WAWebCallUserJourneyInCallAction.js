__d(
  "WAWebCallUserJourneyInCallAction",
  ["WAWebCallUserJourneyLogger", "WAWebWamEnumTsSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logAction({
        callActionType: e,
        subSurface: t,
        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.IN_CALL_UI,
      });
    }
    l.logInCallAction = e;
  },
  98,
);
