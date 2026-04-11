__d(
  "WASmaxInGroupsParentGroupMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "parent_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ parentGroupJid: t.value })
        : t;
    }
    l.parseParentGroupMixin = e;
  },
  98,
);
