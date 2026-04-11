__d(
  "WASmaxInGroupsGroupsDirtyNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInGroupsServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "groups_dirty");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "w:gp2",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "g.us",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsServerNotificationMixin",
      ).parseServerNotificationMixin(t);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "group",
        1,
        1e4,
        e,
      );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: a.value, from: i.value }, l.value, {
              groupsDirtyGroup: s.value,
            }),
          )
        : s;
    }
    ((l.parseGroupsDirtyNotificationRequestGroupsDirtyGroup = e),
      (l.parseGroupsDirtyNotificationRequest = s));
  },
  98,
);
