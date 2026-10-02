__d(
  "WASmaxInMessageDeliverBotMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotResponseMixin",
    "WASmaxInMessageDeliverMessageTargetMixin",
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
        "WASmaxInMessageDeliverMessageTargetMixin",
      ).parseMessageTargetMixin(r.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: a.value,
            metaMessageTargetMixin: i.value,
          })
        : i;
    }
    l.parseBotMessageMixin = e;
  },
  98,
);
