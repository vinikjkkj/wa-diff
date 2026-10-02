__d(
  "WASmaxInMessageDeliverPeerRecipientLIDOrPNMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverPeerRecipientLIDMixin",
    "WASmaxInMessageDeliverPeerRecipientPNMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverPeerRecipientLIDMixin",
      ).parsePeerRecipientLIDMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PeerRecipientLID",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverPeerRecipientPNMixin",
      ).parsePeerRecipientPNMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PeerRecipientPN",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PeerRecipientLID", "PeerRecipientPN"],
            [t, n],
          );
    }
    l.parsePeerRecipientLIDOrPNMixinGroup = e;
  },
  98,
);
