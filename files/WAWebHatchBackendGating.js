__d(
  "WAWebHatchBackendGating",
  ["WAWebHatchGating", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
        primaryAiBotIntegrationEnabled: o(
          "WAWebPrimaryFeatures",
        ).primaryFeatureEnabled("ai_bot_integration_enabled"),
      });
    }
    l.isHatchIntegrationEnabledOnBackend = e;
  },
  98,
);
