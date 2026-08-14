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
      return e.isBot()
        ? o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebBotUtils").isBusinessAssistantBot(e)
            ? !o("WAWebBotBaseGating").isBotEnabled()
            : o("WAWebBotUtils").isMetaAiBot(e)
              ? !0
              : !s()
          : !o("WAWebBotBaseGating").isBotEnabled() && !s()
        : !1;
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
