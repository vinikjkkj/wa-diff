__d(
  "WAWebBotComposerTreatment",
  [
    "WAWebBotComposerSupport",
    "WAWebBotGroupGatingUtils",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProductGating",
    "WAWebBotStaticProfiles",
    "WAWebMuseBotIdentity",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!o("WAWebBotStaticProfiles").isBotSupportClassifiable(e))
        return o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
      var t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
      return o("WAWebMuseBotIdentity").isMuseBotProfileProduct(
        e,
        t == null ? void 0 : t.product,
      ) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebBotComposerSupport").BotComposerTreatment.DEPRECATED
        : o("WAWebBotComposerSupport").getBotComposerTreatment({
            input: t,
            isProductGateOn: function (t) {
              return o("WAWebBotProductGating").isBotProductGateOn(
                t,
                o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
              );
            },
          });
    }
    function s(t) {
      return e(t) !== o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
    }
    ((l.getBotChatComposerTreatment = e), (l.isBotSupportComposerBlocked = s));
  },
  98,
);
