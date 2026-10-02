__d(
  "WASmaxInMessageDeliverCAPITransactionMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "sender");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(e, "receiver");
      return a.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            sender: r.value,
            receiver: a.value,
          })
        : a;
    }
    l.parseCAPITransactionMixin = e;
  },
  98,
);
