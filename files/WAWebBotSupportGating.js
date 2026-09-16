__d(
  "WAWebBotSupportGating",
  ["WAWebBotProduct", "WAWebBotProductGating", "WAWebBotSupportState"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebBotSupportState").evaluateBotSupport(e, function (e) {
        return o("WAWebBotProductGating").isBotProductGateOn(e, t);
      });
      return (
        n.kind === o("WAWebBotSupportState").BotSupportStateKind.SUPPORTED &&
        n.product === o("WAWebBotProduct").BotProduct.THIRD_PARTY
      );
    }
    function s(e) {
      return (
        o("WAWebBotProduct").botProductFromServerValue(
          e == null ? void 0 : e.product,
        ) === o("WAWebBotProduct").BotProduct.THIRD_PARTY
      );
    }
    ((l.isSupportedThirdPartyBot = e), (l.isThirdPartyAgent = s));
  },
  98,
);
