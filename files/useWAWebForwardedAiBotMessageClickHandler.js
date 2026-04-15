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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.forwardedAiBotMessageInfo;
      if (!o("WAWebBotBaseGating").isAiForwardAttributionEnabled() || n == null)
        return null;
      var r = n.botId,
        a;
      t[0] !== r
        ? ((a = function () {
            o("WAWebBotUtils").isMetaAiBot(r) &&
            o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebBotFrontendUtils").getMetaAiChat().then(u)
              : o("WAWebFindChatAction")
                  .findOrCreateLatestChat(r, "newChatFlow")
                  .then(s);
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a;
      return i;
    }
    function s(e) {
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
    }
    function u(e) {
      o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
        type: "ForwardedAiBotMessage",
      });
    }
    l.useForwardedAiBotMessageClickHandler = e;
  },
  98,
);
