__d(
  "WASmaxInReceiptRmrBroadcastDeprecatedMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rmr");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrBroadcastJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    l.parseRmrBroadcastDeprecatedMixin = e;
  },
  98,
);
