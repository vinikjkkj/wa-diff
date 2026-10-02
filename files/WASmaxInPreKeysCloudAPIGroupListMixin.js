__d(
  "WASmaxInPreKeysCloudAPIGroupListMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "groups");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "group",
        1,
        1e4,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ groupsGroup: a.value })
        : a;
    }
    ((l.parseCloudAPIGroupListGroupsGroup = e),
      (l.parseCloudAPIGroupListMixin = s));
  },
  98,
);
