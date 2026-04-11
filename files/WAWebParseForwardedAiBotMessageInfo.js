__d(
  "WAWebParseForwardedAiBotMessageInfo",
  ["WANullthrows", "WAWebDecodeJid", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.botJid,
        n = e.botName,
        a = e.creatorName,
        i = o("WAWebDecodeJid").strictDecodeJid(t);
      return {
        botId: o("WAWebWidFactory").asBotWidOrThrow(r("WANullthrows")(i)),
        botName: n,
        creatorName: a,
      };
    }
    l.parseForwardedAiBotMessageInfo = e;
  },
  98,
);
