__d(
  "WASmaxInMessageDeliverGroupInviteTargetMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrGroupJid(n.value, "group_invite");
      return r.success
        ? o("WAResultOrError").makeResult({ metaGroupInvite: r.value })
        : r;
    }
    l.parseGroupInviteTargetMixin = e;
  },
  98,
);
