__d(
  "WAWebCallUserJourneyChatThreadAction",
  ["WAWebCallUserJourneyLogger", "WAWebWamEnumTsSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logAction({
        callActionType: e,
        subSurface: t,
        uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
      });
    }
    l.logChatThreadCallAction = e;
  },
  98,
);
