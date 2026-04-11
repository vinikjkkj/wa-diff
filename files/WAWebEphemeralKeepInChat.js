__d(
  "WAWebEphemeralKeepInChat",
  [
    "WANullthrows",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.keepInChat;
      if (t != null && t.key != null) {
        var n = t.key,
          a = n.fromMe,
          i = n.id,
          l = n.participant,
          s = n.remoteJid,
          u = t.keepType,
          c = t.serverTimestampMs;
        if (i == null || u == null || c == null || s == null)
          throw r("err")(
            "parseKeepInChatHistorySyncMessage: malformed KIC WebMessageInfo",
          );
        var d = o("WAWebEphemeralKeepInChatUtils").parseKeepTypeToKicState(u);
        if (d == null)
          throw r("err")(
            "parseKeepInChatHistorySyncMessage: KeepType has unsupported value",
          );
        return {
          kicKey: new (r("WAWebMsgKey"))({
            fromMe: r("WANullthrows")(a),
            id: r("WANullthrows")(i),
            remote: r("WANullthrows")(
              o("WAWebWidFactory").createWidFromWidLike(s),
            ),
            participant:
              l != null ? o("WAWebWidFactory").createWidFromWidLike(l) : void 0,
          }),
          kicState: d,
          kicTimestampMs: parseInt(c, 10),
        };
      }
    }
    l.parseKeepInChatHistorySyncMessage = e;
  },
  98,
);
