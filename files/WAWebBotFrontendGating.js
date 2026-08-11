__d(
  "WAWebBotFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebMobilePlatforms").isSMB() &&
        (o("WAWebBotUtils").isMetaAiBot(e) ||
          o("WAWebBotUtils").isSmbMetaAiBot(e))
        ? !0
        : e.isBot() && !o("WAWebBotBaseGating").isBotEnabled() && !s();
    }
    function s() {
      return (
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiBotIntegrationEnabled &&
        o("WAWebABProps").getABPropConfigValue("ai_bot_integration_enabled")
      );
    }
    ((l.isBotChatUnavailable = e), (l.isManusIntegrationEnabled = s));
  },
  98,
);
