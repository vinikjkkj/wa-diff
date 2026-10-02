__d(
  "WASmaxInMessageDeliverBotProactiveMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotClientMultiThreadIDMixin",
    "WASmaxInMessageDeliverBotResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverBotResponseMixin").parseBotResponseMixin(
        n.value,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverBotClientMultiThreadIDMixin",
      ).parseBotClientMultiThreadIDMixin(n.value);
      return o("WAResultOrError").makeResult({
        botBotResponseMixin: r.value,
        botBotClientMultiThreadIDMixin: a.success ? a.value : null,
      });
    }
    l.parseBotProactiveMessageMixin = e;
  },
  98,
);
