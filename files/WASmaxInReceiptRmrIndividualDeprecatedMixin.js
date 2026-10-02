__d(
  "WASmaxInReceiptRmrIndividualDeprecatedMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rmr");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "participant");
      return r.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            participant: r.value,
          })
        : r;
    }
    l.parseRmrIndividualDeprecatedMixin = e;
  },
  98,
);
