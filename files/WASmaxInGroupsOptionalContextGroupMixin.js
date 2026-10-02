__d(
  "WASmaxInGroupsOptionalContextGroupMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "context_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ contextGroupJid: t.value })
        : t;
    }
    l.parseOptionalContextGroupMixin = e;
  },
  98,
);
