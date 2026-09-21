__d(
  "WAWebCallUserJourneyGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebVoipGatingUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !o("WAWebVoipGatingUtils").isGuestViewer() &&
        r("justknobx")._("4567") &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling") &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_call_user_journey_logging_enabled",
        )
      );
    }
    l.isCallUserJourneyLoggingEnabled = e;
  },
  98,
);
