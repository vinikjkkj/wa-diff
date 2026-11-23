__d(
  "SEFormatConsentProducerErrorUtils",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        r("FBLogger")("ads_extensions")
          .catching(r("getErrorSafe")(e))
          .warn("Failed to record a Site Extensions format consent snapshot");
      } catch (e) {
        return;
      }
    }
    l.reportSEFormatConsentRecorderError = e;
  },
  98,
);
