__d(
  "WASmaxInMessageDeliverRecipientPNMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "recipient_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientPn: n.value })
        : n;
    }
    l.parseRecipientPNMixin = e;
  },
  98,
);
