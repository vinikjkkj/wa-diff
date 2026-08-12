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
    function s(e) {
      return o("WAWebBotBaseGating").isStandardBotProfileEnabled()
        ? o("WAWebBotProduct").botProductFromServerValue(
            e == null ? void 0 : e.product,
          ) === o("WAWebBotProduct").BotProduct.THIRD_PARTY
        : !1;
    }
    ((l.isSupportedThirdPartyBot = e), (l.isThirdPartyAgent = s));
  },
  98,
);
