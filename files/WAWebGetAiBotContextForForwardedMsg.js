__d(
  "WAWebGetAiBotContextForForwardedMsg",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebMsgGetters",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.forwardedAiBotMessageInfo;
      if (n != null)
        return o("WAWebBotBaseGating").isAiForwardAttributionEnabled()
          ? n
          : void 0;
      var r = o("WAWebMsgGetters").getSender(e);
      if (
        !(
          r == null ||
          !r.isBot() ||
          !o("WAWebBotBaseGating").isAiForwardAttributionEnabled()
        )
      ) {
        var a = o("WAWebWidFactory").asBotWidOrThrow(r),
          i = o("WAWebBotProfileCollection").BotProfileCollection.get(r);
        return {
          botId: a,
          botName: i == null ? void 0 : i.name,
          creatorName:
            (t = i == null ? void 0 : i.creatorName) != null ? t : void 0,
        };
      }
    }
    l.getAiBotContextForForwardedMsg = e;
  },
  98,
);
