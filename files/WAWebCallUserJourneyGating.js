__d(
  "WAWebCallUserJourneyGating",
  [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebVoipGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        !r("WAWebEnvironment").isWindows &&
        !o("WAWebVoipGatingUtils").isGuestViewer() &&
        !o("WAWebMobilePlatforms").isSMB() &&
        r("justknobx")._("4567") &&
        o("WAWebABProps").getABPropConfigValue("enable_web_calling")
      );
    }
    l.isCallUserJourneyLoggingEnabled = e;
  },
  98,
);
