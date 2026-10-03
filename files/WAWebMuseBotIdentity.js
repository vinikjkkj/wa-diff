__d(
  "WAWebMuseBotIdentity",
  ["WAWebBotProduct", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        !o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebBotProduct").botProductFromServerValue(t) ===
          o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    l.isMuseBotProfileProduct = e;
  },
  98,
);
