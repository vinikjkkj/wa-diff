__d(
  "WAWebConversationCountersUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = e.depth,
        o = e.lastMessageFromMe,
        a = e.repeat;
      return o == null
        ? { depth: r, repeat: 0, lastMessageFromMe: t }
        : t !== o
          ? { depth: t === n ? r + 1 : r, repeat: 0, lastMessageFromMe: t }
          : { depth: r, repeat: a + 1, lastMessageFromMe: t };
    }
    i.nextConversationCounters = e;
  },
  66,
);
