__d(
  "WASmaxInStatusDeliverStatusEncMentionSourceMixin",
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
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "meta");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "mention_source",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "to", 1, 5, e);
      return i.success
        ? o("WAResultOrError").makeResult({ metaMentionSourceTo: i.value })
        : i;
    }
    ((l.parseStatusEncMentionSourceMetaMentionSourceTo = e),
      (l.parseStatusEncMentionSourceMixin = s));
  },
  98,
);
