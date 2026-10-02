__d(
  "WASmaxInPingsServerPingRequest",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "get",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "xmlns",
        "urn:xmpp:ping",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        "id",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            t: r.value,
            type: a.value,
            xmlns: i.value,
            id: l.value,
          })
        : l;
    }
    l.parseServerPingRequest = e;
  },
  98,
);
