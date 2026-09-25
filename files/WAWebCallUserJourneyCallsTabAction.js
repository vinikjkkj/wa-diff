__d(
  "WAWebCallUserJourneyCallsTabAction",
  ["WAWebCallUserJourneyLogger", "WAWebWamEnumTsSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logOutOfCallAction({
        callActionType: e,
        subSurface: t,
        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CALLS_HOME_TAB,
      });
    }
    l.logCallsTabCallAction = e;
  },
  98,
);
