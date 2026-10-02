__d(
  "WASmaxInMessageDeliverRecipientDisplayNameOrPeerRecipientUsernameMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
    "WASmaxInMessageDeliverRecipientDisplayNameMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverRecipientDisplayNameMixin",
      ).parseRecipientDisplayNameMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RecipientDisplayName",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
      ).parsePeerRecipientUsernameMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PeerRecipientUsername",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RecipientDisplayName", "PeerRecipientUsername"],
            [t, n],
          );
    }
    l.parseRecipientDisplayNameOrPeerRecipientUsernameMixinGroup = e;
  },
  98,
);
