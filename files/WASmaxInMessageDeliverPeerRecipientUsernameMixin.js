__d(
  "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "peer_recipient_username");
      return t.success
        ? o("WAResultOrError").makeResult({ peerRecipientUsername: t.value })
        : t;
    }
    l.parsePeerRecipientUsernameMixin = e;
  },
  98,
);
