__d(
  "WASmaxInBrPaymentCardMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentBROrMXOrESCardMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBrPaymentBROrMXOrESCardMixinGroup",
      ).parseBROrMXOrESCardMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({ bROrMXOrESCardMixinGroup: n.value })
        : n;
    }
    l.parseCardMixin = e;
  },
  98,
);
