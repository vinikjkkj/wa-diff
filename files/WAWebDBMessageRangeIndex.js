__d(
  "WAWebDBMessageRangeIndex",
  ["$InternalEnum", "WAWebOrderPreservingHex"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      IncomingChatMessage: "1",
      Outgoing: "2",
      SystemMessage: "3",
    });
    function s(t, n, r, a) {
      var i;
      return (
        r
          ? (i = e.SystemMessage)
          : n
            ? (i = e.IncomingChatMessage)
            : (i = e.Outgoing),
        t +
          "_" +
          i +
          "_" +
          (a != null ? o("WAWebOrderPreservingHex").orderPreservingHex(a) : "")
      );
    }
    ((l.MessagePropertyType = e), (l.craftMessageRangeIndex = s));
  },
  98,
);
