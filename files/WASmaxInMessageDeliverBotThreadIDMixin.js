__d(
  "WASmaxInMessageDeliverBotThreadIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ threadId: n.value })
        : n;
    }
    l.parseBotThreadIDMixin = e;
  },
  98,
);
