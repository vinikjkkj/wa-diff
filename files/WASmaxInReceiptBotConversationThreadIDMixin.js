__d(
  "WASmaxInReceiptBotConversationThreadIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "conversation_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ conversationThreadId: n.value })
        : n;
    }
    l.parseBotConversationThreadIDMixin = e;
  },
  98,
);
