__d(
  "WAWebHatchBackendGating",
  ["WAWebHatchGating", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ai_hatch_integration_enabled";
    function s() {
      return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
        primaryAiHatchIntegrationEnabled: o(
          "WAWebPrimaryFeatures",
        ).primaryFeatureEnabled(e),
      });
    }
    ((l.HATCH_PRIMARY_FEATURE = e), (l.isHatchIntegrationEnabledOnBackend = s));
  },
  98,
);
