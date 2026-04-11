__d(
  "WASmaxInGroupsSubGroupMixin",
  ["WAResultOrError", "WASmaxParseJid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "sub_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ subGroupJid: t.value })
        : t;
    }
    l.parseSubGroupMixin = e;
  },
  98,
);
