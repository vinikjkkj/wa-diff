__d(
  "WASmaxInMessageDeliverSenderLIDMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrLidUserJid(e, "sender_lid");
      return n.success
        ? o("WAResultOrError").makeResult({ senderLid: n.value })
        : n;
    }
    l.parseSenderLIDMixin = e;
  },
  98,
);
