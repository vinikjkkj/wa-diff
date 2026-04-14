__d(
  "WAWebGetAiBotContextForForwardedMsg",
  ["WAWebBotBaseGating", "WAWebMsgGetters", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebBotBaseGating").isAiForwardAttributionEnabled()) {
        if (e.forwardedAiBotMessageInfo != null)
          return e.forwardedAiBotMessageInfo;
        var t = o("WAWebMsgGetters").getSender(e);
        if (!(t == null || !t.isBot()))
          return { botId: o("WAWebWidFactory").asBotWidOrThrow(t) };
      }
    }
    l.getAiBotContextForForwardedMsg = e;
  },
  98,
);
