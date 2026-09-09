__d(
  "WAWebBotComposerTreatment",
  [
    "WAWebBotBaseGating",
    "WAWebBotComposerSupport",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProductGating",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isBot()
        ? o("WAWebBotComposerSupport").getBotComposerTreatment({
            input: o("WAWebResolveBotProfile").resolveBotSupportInput(e),
            isFeatureEnabled:
              o("WAWebBotBaseGating").isStandardBotProfileEnabled(),
            isProductGateOn: function (t) {
              return o("WAWebBotProductGating").isBotProductGateOn(
                t,
                o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures(),
              );
            },
          })
        : o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
    }
    function s(t) {
      return e(t) !== o("WAWebBotComposerSupport").BotComposerTreatment.COMPOSE;
    }
    ((l.getBotChatComposerTreatment = e), (l.isBotSupportComposerBlocked = s));
  },
  98,
);
