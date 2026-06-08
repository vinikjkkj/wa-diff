__d(
  "WAWebHatchFrontendGating",
  ["WAWebABProps", "WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiBotIntegrationEnabled &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_enabled")
      );
    }
    l.isHatchIntegrationEnabled = e;
  },
  98,
);
