__d(
  "WASmaxInMessageDeliverPeerRecipientPNMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrUserJid(e, "peer_recipient_pn");
      return t.success
        ? o("WAResultOrError").makeResult({ peerRecipientPn: t.value })
        : t;
    }
    l.parsePeerRecipientPNMixin = e;
  },
  98,
);
