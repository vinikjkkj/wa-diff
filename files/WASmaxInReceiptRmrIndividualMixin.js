__d(
  "WASmaxInReceiptRmrIndividualMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rmr");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    l.parseRmrIndividualMixin = e;
  },
  98,
);
