__d(
  "WASmaxInMessagePublishAckMixin",
  [
    "WAResultOrError",
    "WASmaxInMessagePublishAckAdminEditMixin",
    "WASmaxInMessagePublishAckAdminRevokeMixin",
    "WASmaxInMessagePublishAckMessageEditMixin",
    "WASmaxInMessagePublishAckMessagePinMixin",
    "WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup",
    "WASmaxInMessagePublishAckRevokeMixin",
    "WASmaxInMessagePublishServerFrankingTagMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "message",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!u.success) return u;
      var c = o(
          "WASmaxInMessagePublishAckMessageEditMixin",
        ).parseAckMessageEditMixin(e),
        d = o("WASmaxInMessagePublishAckAdminEditMixin").parseAckAdminEditMixin(
          e,
        ),
        m = o(
          "WASmaxInMessagePublishAckMessagePinMixin",
        ).parseAckMessagePinMixin(e),
        p = o(
          "WASmaxInMessagePublishAckAdminRevokeMixin",
        ).parseAckAdminRevokeMixin(e),
        _ = o("WASmaxInMessagePublishAckRevokeMixin").parseAckRevokeMixin(e),
        f = o(
          "WASmaxInMessagePublishServerFrankingTagMixin",
        ).parseServerFrankingTagMixin(e),
        g = o(
          "WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup",
        ).parseAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup(
          e,
        );
      return o("WAResultOrError").makeResult({
        class: i.value,
        t: u.value,
        ackMessageEditMixin: c.success ? c.value : null,
        ackAdminEditMixin: d.success ? d.value : null,
        ackMessagePinMixin: m.success ? m.value : null,
        ackAdminRevokeMixin: p.success ? p.value : null,
        ackRevokeMixin: _.success ? _.value : null,
        serverFrankingTagMixin: f.success ? f.value : null,
        ackPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup:
          g.success ? g.value : null,
      });
    }
    l.parseAckMixin = e;
  },
  98,
);
