__d(
  "WASmaxInMessageDeliverPeerRecipientLIDMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrLidUserJid(e, "peer_recipient_lid");
      return t.success
        ? o("WAResultOrError").makeResult({ peerRecipientLid: t.value })
        : t;
    }
    l.parsePeerRecipientLIDMixin = e;
  },
  98,
);
