__d(
  "WAWebBotFrontendGating",
  ["WAWebABProps", "WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiBotIntegrationEnabled &&
        o("WAWebABProps").getABPropConfigValue("ai_bot_integration_enabled")
      );
    }
    l.isManusIntegrationEnabled = e;
  },
  98,
);
