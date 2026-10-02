__d(
  "WASmaxInMessageDeliverRecipientLIDMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "recipient_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ recipientLid: n.value })
        : n;
    }
    l.parseRecipientLIDMixin = e;
  },
  98,
);
