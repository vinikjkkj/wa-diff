__d(
  "WAWebBotSupportGating",
  [
    "WAWebBotBaseGating",
    "WAWebBotProduct",
    "WAWebBotProductGating",
    "WAWebBotSupportState",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (!o("WAWebBotBaseGating").isStandardBotProfileEnabled()) return !1;
      var n = o("WAWebBotSupportState").evaluateBotSupport(e, function (e) {
        return o("WAWebBotProductGating").isBotProductGateOn(e, t);
      });
      return (
        n.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED &&
        n.product === o("WAWebBotProduct").BotProduct.THIRD_PARTY
      );
    }
    l.isSupportedThirdPartyBot = e;
  },
  98,
);
