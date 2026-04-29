__d(
  "WAWebForwardedBotDisplayName",
  ["fbt", "WAWebBotProfileCollection", "WAWebBotUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      if (e.botName != null) return e.botName;
      var n =
        (t = o("WAWebBotProfileCollection").BotProfileCollection.get(
          e.botId,
        )) == null
          ? void 0
          : t.name;
      return n != null
        ? n
        : o("WAWebBotUtils").isMetaAiBot(e.botId)
          ? s._(/*BTDS*/ "Meta AI")
          : s._(/*BTDS*/ "View AI chat");
    }
    l.getForwardedBotDisplayName = e;
  },
  226,
);
