__d(
  "WASmaxInClientExpirationClientExpirationRequest",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "client_expiration",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "t",
        0,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            clientExpirationT: a.value,
          })
        : a;
    }
    l.parseClientExpirationRequest = e;
  },
  98,
);
