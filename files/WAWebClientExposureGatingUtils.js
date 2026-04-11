__d(
  "WAWebClientExposureGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_wefr_client_expo_pulse",
      );
    }
    l.clientExposurePulseLoggingEnabled = e;
  },
  98,
);
