__d(
  "WAWebBotPrimaryFeaturesFrontend",
  ["WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebPrimaryFeaturesModel").PrimaryFeatures
        .aiArtifactsFixedEnabled;
    }
    function s() {
      return {
        aiBotIntegrationEnabled: o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiBotIntegrationEnabled,
        aiHatchIntegrationEnabled: o("WAWebPrimaryFeaturesModel")
          .PrimaryFeatures.aiHatchIntegrationEnabled,
      };
    }
    var u =
      "change:aiBotIntegrationEnabled change:aiHatchIntegrationEnabled change:aiArtifactsFixedEnabled";
    ((l.isBotArtifactDownloadEnabled = e),
      (l.getBotPrimaryFeatures = s),
      (l.BOT_PRIMARY_FEATURE_CHANGE_EVENTS = u));
  },
  98,
);
