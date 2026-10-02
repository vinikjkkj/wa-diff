__d(
  "WASmaxInReceiptRecipientMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "recipient",
        o("WASmaxInReceiptEnums").USERJID_LIDUSERJID_USERJID,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ recipient: n.value })
        : n;
    }
    l.parseRecipientMixin = e;
  },
  98,
);
