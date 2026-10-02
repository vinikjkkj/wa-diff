__d(
  "WASmaxInMessageDeliverToUserMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    l.parseToUserMixin = e;
  },
  98,
);
