__d(
  "WAWebBotLearnMoreUrl",
  [
    "WAWebBotProduct",
    "WAWebBotSupportGating",
    "WAWebFaqUrl",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBotSupportGating").isSupportedThirdPartyBot(
        e,
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.aiBotIntegrationEnabled,
      )
        ? o("WAWebFaqUrl").getThirdPartyAgentLearnMoreUrl()
        : o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl();
    }
    function s(e) {
      var t = o("WAWebBotProduct").botProductFromServerValue(
        e == null ? void 0 : e.product,
      );
      return t === o("WAWebBotProduct").BotProduct.HATCH
        ? o("WAWebFaqUrl").getHatchLearnMoreUrl()
        : t === o("WAWebBotProduct").BotProduct.MANUS
          ? o("WAWebFaqUrl").getManusLearnMoreUrl()
          : null;
    }
    ((l.getBotSupportLearnMoreUrl = e), (l.getBotChannelLearnMoreUrl = s));
  },
  98,
);
