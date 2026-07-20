__d(
  "WAWebParseForwardedAiBotMessageInfo",
  ["WAWebDecodeJid", "WAWebWidFactory", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.botJid,
        n = e.botName,
        a = e.creatorName,
        i = o("WAWebDecodeJid").strictDecodeJid(t);
      return {
        botId: o("WAWebWidFactory").asBotWidOrThrow(r("nullthrows")(i)),
        botName: n,
        creatorName: a,
        validationStatus: "pending",
      };
    }
    l.parseForwardedAiBotMessageInfo = e;
  },
  98,
);
