__d(
  "WAWebCallUserJourneyInCallAction",
  [
    "WAWebCallCollection",
    "WAWebCallUserJourneyLogger",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logAction({
        callActionType: e,
        subSurface: t,
        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.IN_CALL_UI,
      });
    }
    function s(t, n) {
      r("WAWebCallCollection").activeCall != null && e(t, n);
    }
    ((l.logInCallAction = e), (l.logInCallActionOnTeardown = s));
  },
  98,
);
