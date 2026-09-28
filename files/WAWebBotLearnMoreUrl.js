__d(
  "WAWebBotLearnMoreUrl",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProduct",
    "WAWebBotSupportGating",
    "WAWebFaqUrl",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebBotGroupGatingUtils").isGroupAgent(e, t)
        ? (e == null ? void 0 : e.hcaEntrypointId) != null &&
          e.hcaEntrypointId !== ""
          ? o("WAWebFaqUrl").getCxtFaqUrl(e.hcaEntrypointId)
          : o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl()
        : null;
    }
    function s(t, n) {
      return t == null
        ? null
        : e(
            o("WAWebResolveBotProfile").resolveBotSupportInput(t),
            n.isGroup()
              ? o("WAWebBotGroupGatingUtils").BotGroupContext.GROUP
              : o("WAWebBotGroupGatingUtils").BotGroupContext.ONE_TO_ONE,
          );
    }
    function u(e) {
      return o("WAWebBotSupportGating").isSupportedThirdPartyBot(
        e,
        o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
      )
        ? o("WAWebFaqUrl").getThirdPartyAgentLearnMoreUrl()
        : o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl();
    }
    function c(e) {
      var t = o("WAWebBotProduct").botProductFromServerValue(
        e == null ? void 0 : e.product,
      );
      return t === o("WAWebBotProduct").BotProduct.HATCH
        ? o("WAWebFaqUrl").getHatchLearnMoreUrl()
        : t === o("WAWebBotProduct").BotProduct.MANUS
          ? o("WAWebFaqUrl").getManusLearnMoreUrl()
          : null;
    }
    ((l.getGroupAgentLearnMoreUrl = e),
      (l.getGroupAgentLearnMoreUrlForChat = s),
      (l.getBotSupportLearnMoreUrl = u),
      (l.getBotChannelLearnMoreUrl = c));
  },
  98,
);
