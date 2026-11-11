__d(
  "WAWebDBMessageRangeIndex",
  ["$InternalEnum", "WAWebOrderPreservingHex"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      IncomingChatMessage: "1",
      Outgoing: "2",
      SystemMessage: "3",
    });
    function s(t) {
      var n = t.chatId,
        r = t.isIncoming,
        a = t.isSystemMessage,
        i = t.timestamp,
        l;
      return (
        a
          ? (l = e.SystemMessage)
          : r
            ? (l = e.IncomingChatMessage)
            : (l = e.Outgoing),
        n +
          "_" +
          l +
          "_" +
          (i != null ? o("WAWebOrderPreservingHex").orderPreservingHex(i) : "")
      );
    }
    ((l.MessagePropertyType = e), (l.craftMessageRangeIndex = s));
  },
  98,
);
