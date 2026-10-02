__d(
  "WASmaxInMessageDeliverCoExV2ProactiveMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotClientMultiThreadIDMixin",
    "WASmaxInMessageDeliverBotResponseMixin",
    "WASmaxInMessageDeliverCoExV2ProactiveMetaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverBotResponseMixin").parseBotResponseMixin(
        n.value,
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInMessageDeliverBotClientMultiThreadIDMixin",
        ).parseBotClientMultiThreadIDMixin(n.value),
        l = o(
          "WASmaxInMessageDeliverCoExV2ProactiveMetaMixin",
        ).parseCoExV2ProactiveMetaMixin(r.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: a.value,
            botBotClientMultiThreadIDMixin: i.success ? i.value : null,
            metaCoExV2ProactiveMetaMixin: l.value,
          })
        : l;
    }
    l.parseCoExV2ProactiveMessageMixin = e;
  },
  98,
);
