__d(
  "WAWebBotLearnMoreUrl",
  ["WAWebBotSupportGating", "WAWebFaqUrl", "WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBotSupportGating").isSupportedThirdPartyBot(
        e,
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled,
      )
        ? o("WAWebFaqUrl").getThirdPartyAgentLearnMoreUrl()
        : o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl();
    }
    l.getBotSupportLearnMoreUrl = e;
  },
  98,
);
