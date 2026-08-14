__d(
  "WASmaxInStatusDeliverStatusEncMentionedUsersMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInStatusDeliverEnums").GROUPJID_LIDUSERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "peer_pn_jid",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, peerPnJid: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "meta");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "mentioned_users",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "to", 1, 5, e);
      return i.success
        ? o("WAResultOrError").makeResult({ metaMentionedUsersTo: i.value })
        : i;
    }
    ((l.parseStatusEncMentionedUsersMetaMentionedUsersTo = e),
      (l.parseStatusEncMentionedUsersMixin = s));
  },
  98,
);
