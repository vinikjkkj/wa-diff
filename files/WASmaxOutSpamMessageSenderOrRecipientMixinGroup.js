__d(
  "WASmaxOutSpamMessageSenderOrRecipientMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutSpamMessageRecipientMixin",
    "WASmaxOutSpamMessageSenderMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.messageSender)
        return o("WASmaxOutSpamMessageSenderMixin").mergeMessageSenderMixin(
          e,
          t.messageSender,
        );
      if (t.messageRecipient)
        return o(
          "WASmaxOutSpamMessageRecipientMixin",
        ).mergeMessageRecipientMixin(e, t.messageRecipient);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMessageSenderOrRecipientMixinGroup = e;
  },
  98,
);
