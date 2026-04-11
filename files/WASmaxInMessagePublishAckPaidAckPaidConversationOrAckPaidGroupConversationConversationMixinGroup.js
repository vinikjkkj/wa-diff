__d(
  "WASmaxInMessagePublishAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessagePublishAckPaidConversationMixin",
    "WASmaxInMessagePublishAckPaidGroupConversationMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessagePublishAckPaidConversationMixin",
      ).parseAckPaidConversationMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "AckPaidConversation",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessagePublishAckPaidGroupConversationMixin",
      ).parseAckPaidGroupConversationMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "AckPaidGroupConversation",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["AckPaidConversation", "AckPaidGroupConversation"],
            [t, n],
          );
    }
    l.parseAckPaidAckPaidConversationOrAckPaidGroupConversationConversationMixinGroup =
      e;
  },
  98,
);
