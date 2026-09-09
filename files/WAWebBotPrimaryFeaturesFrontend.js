__d(
  "WAWebBotPrimaryFeaturesFrontend",
  ["WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return {
        aiBotIntegrationEnabled: o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiBotIntegrationEnabled,
        aiHatchIntegrationEnabled: o("WAWebPrimaryFeaturesModel")
          .PrimaryFeatures.aiHatchIntegrationEnabled,
      };
    }
    var s = "change:aiBotIntegrationEnabled change:aiHatchIntegrationEnabled";
    ((l.getBotPrimaryFeatures = e), (l.BOT_PRIMARY_FEATURE_CHANGE_EVENTS = s));
  },
  98,
);
