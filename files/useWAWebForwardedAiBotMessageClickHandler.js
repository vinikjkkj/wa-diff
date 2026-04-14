__d(
  "useWAWebForwardedAiBotMessageClickHandler",
  [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.forwardedAiBotMessageInfo;
      if (!o("WAWebBotBaseGating").isAiForwardAttributionEnabled() || t == null)
        return null;
      var n = t.botId,
        r = function () {
          o("WAWebBotUtils").isMetaAiBot(n) &&
          o("WAWebBotGating").isAiChatThreadsEnabled()
            ? o("WAWebBotFrontendUtils")
                .getMetaAiChat()
                .then(function (e) {
                  o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                    type: "ForwardedAiBotMessage",
                  });
                })
            : o("WAWebFindChatAction")
                .findOrCreateLatestChat(n, "newChatFlow")
                .then(function (e) {
                  var t = e.chat;
                  o("WAWebCmd")
                    .Cmd.openChatFromUnread({
                      chat: t,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .ForwardedAiBotMessage,
                    })
                    .then(function (e) {
                      e &&
                        (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
                        o("WAWebCmd").Cmd.scrollToActiveChat());
                    });
                });
        };
      return r;
    }
    l.useForwardedAiBotMessageClickHandler = e;
  },
  98,
);
