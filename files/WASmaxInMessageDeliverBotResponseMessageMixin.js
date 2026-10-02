__d(
  "WASmaxInMessageDeliverBotResponseMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotResponseMixin",
    "WASmaxInMessageDeliverEmptyBizMixin",
    "WASmaxInMessageDeliverEncTypeMessageSecretMessageMixin",
    "WASmaxInMessageDeliverEncVersionBot",
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
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverBotResponseMixin").parseBotResponseMixin(
        n.value,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInMessageDeliverMessageTargetMixin",
      ).parseMessageTargetMixin(r.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInMessageDeliverEncTypeMessageSecretMessageMixin",
      ).parseEncTypeMessageSecretMessageMixin(a.value);
      if (!s.success) return s;
      var u = o("WASmaxInMessageDeliverEmptyBizMixin").parseEmptyBizMixin(e),
        c = o("WASmaxInMessageDeliverEncVersionBot").parseEncVersionBot(
          a.value,
        );
      return c.success
        ? o("WAResultOrError").makeResult({
            botBotResponseMixin: i.value,
            metaMessageTargetMixin: l.value,
            encEncTypeMessageSecretMessageMixin: s.value,
            hasEmptyBizMixin: u.success,
            encEncVersionBot: c.value,
          })
        : c;
    }
    l.parseBotResponseMessageMixin = e;
  },
  98,
);
