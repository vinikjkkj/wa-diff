__d(
  "WAWebMetaAiThreadChat",
  ["WAWebBotGating", "WAWebBotSupportGating", "WAWebResolveBotProfile"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(o("WAWebResolveBotProfile").resolveBotSupportInput(e));
    }
    function s(e) {
      return e == null ||
        e.isDeprecated === !0 ||
        e.isDeleted === !0 ||
        !o("WAWebBotSupportGating").isMetaAiThreadProfile(e)
        ? !1
        : o("WAWebBotGating").isMetaAiThreadRenderingEnabled();
    }
    ((l.isMetaAiThreadChat = e), (l.isMetaAiThreadSupportInput = s));
  },
  98,
);
