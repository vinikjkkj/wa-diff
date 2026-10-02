__d(
  "WASmaxInReceiptBotClientMultiThreadIDReceiptMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptBotClientMultiThreadIDMixin",
    "WASmaxInReceiptBotConversationThreadIDMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o(
        "WASmaxInReceiptBotClientMultiThreadIDMixin",
      ).parseBotClientMultiThreadIDMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInReceiptBotConversationThreadIDMixin",
      ).parseBotConversationThreadIDMixin(n.value);
      return o("WAResultOrError").makeResult({
        botBotClientMultiThreadIDMixin: r.value,
        botBotConversationThreadIDMixin: a.success ? a.value : null,
      });
    }
    l.parseBotClientMultiThreadIDReceiptMixin = e;
  },
  98,
);
