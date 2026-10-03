__d(
  "WAWebBotLearnMoreUrl",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProduct",
    "WAWebBotSupportGating",
    "WAWebFaqUrl",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBotSupportGating").isSupportedThirdPartyBot(
        e,
        o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
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
          : t === o("WAWebBotProduct").BotProduct.MUSE
            ? u(e)
            : null;
    }
    function u(e) {
      var t = e == null ? void 0 : e.hcaEntrypointId;
      return t == null ||
        t === "" ||
        (e == null ? void 0 : e.isDeleted) === !0 ||
        !o("WAWebBotGroupGatingUtils").isMuseProductSupported()
        ? o("WAWebFaqUrl").getStandardBotProfileLearnMoreUrl()
        : o("WAWebFaqUrl").getCxtFaqUrl(t);
    }
    ((l.getBotSupportLearnMoreUrl = e), (l.getBotChannelLearnMoreUrl = s));
  },
  98,
);
