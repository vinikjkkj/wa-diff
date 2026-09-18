__d(
  "WAWebMetaAiThreadChat",
  ["WAWebBotGating", "WAWebBotProduct", "WAWebResolveBotProfile"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(o("WAWebResolveBotProfile").resolveBotSupportInput(e));
    }
    function s(e) {
      return e == null ||
        e.isDeprecated === !0 ||
        e.isDeleted === !0 ||
        o("WAWebBotProduct").botProductFromServerValue(e.product) !==
          o("WAWebBotProduct").BotProduct.META_AI_THREAD
        ? !1
        : o("WAWebBotGating").isMetaAiThreadRenderingEnabled();
    }
    ((l.isMetaAiThreadChat = e), (l.isMetaAiThreadSupportInput = s));
  },
  98,
);
