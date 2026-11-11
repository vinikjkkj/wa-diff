__d(
  "WAWebBotTypingIndicatorAfterSend",
  [
    "WAWebBizBotProfileUtils",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotUtils",
    "WAWebMediaGatingUtils",
    "WAWebMsgType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      s(e, t) && o("WAWebBotGenTypingIndicatorMsg").showBotTypingIndicator(e);
    }
    function s(e, t) {
      var n =
          o("WAWebBotBaseGating").isBotEnabled() &&
          e.id instanceof r("WAWebWid") &&
          e.id.isBot(),
        a =
          o("WAWebBotBaseGating").isBizBot3pEnabled() &&
          o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(
            e.contact.businessProfile,
          );
      return (
        (n || a) &&
        t.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        (t.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
          (o("WAWebBotUtils").isHatchBot(e.id) &&
            o("WAWebMediaGatingUtils")
              .getSupportedMediaTypesForChat(e)
              .has(t.type)))
      );
    }
    l.maybeGenBotTypingIndicatorMessage = e;
  },
  98,
);
