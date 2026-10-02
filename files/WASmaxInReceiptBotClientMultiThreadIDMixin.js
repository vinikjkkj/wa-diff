__d(
  "WASmaxInReceiptBotClientMultiThreadIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "client_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ clientThreadId: n.value })
        : n;
    }
    l.parseBotClientMultiThreadIDMixin = e;
  },
  98,
);
