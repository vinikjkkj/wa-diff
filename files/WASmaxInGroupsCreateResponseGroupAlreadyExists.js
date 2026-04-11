__d(
  "WASmaxInGroupsCreateResponseGroupAlreadyExists",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "g.us",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseJid").attrGroupJid(r.value, "jid");
      return u.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            type: i.value,
            groupJid: u.value,
          })
        : u;
    }
    l.parseCreateResponseGroupAlreadyExists = e;
  },
  98,
);
