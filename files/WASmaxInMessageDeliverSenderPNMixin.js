__d(
  "WASmaxInMessageDeliverSenderPNMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "sender_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ senderPn: n.value })
        : n;
    }
    l.parseSenderPNMixin = e;
  },
  98,
);
