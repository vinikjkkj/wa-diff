__d(
  "WAWebCTWADetectedOutcomeOnboardingStatusNotification",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "ctwaDetectedOutcomeOnboardingStatusUpdate",
        { onboardingStatus: e },
      );
    }
    l.handleCTWADetectedOutcomeOnboardingStatusNotification = e;
  },
  98,
);
