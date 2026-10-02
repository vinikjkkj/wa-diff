__d(
  "WASmaxInMessageDeliverRecipientMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "recipient",
        o("WASmaxInMessageDeliverEnums").USERJID_USERJID,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ recipient: n.value })
        : n;
    }
    l.parseRecipientMixin = e;
  },
  98,
);
