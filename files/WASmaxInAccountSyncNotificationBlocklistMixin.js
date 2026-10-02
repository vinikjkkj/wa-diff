__d(
  "WASmaxInAccountSyncNotificationBlocklistMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "item");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(e, "prev_dhash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "action",
        o("WASmaxInAccountSyncEnums").ENUM_BLOCK_UNBLOCK,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(n.value, "jid");
      return l.success
        ? o("WAResultOrError").makeResult({
            dhash: r.value,
            prevDhash: a.value,
            itemAction: i.value,
            itemJid: l.value,
          })
        : l;
    }
    l.parseNotificationBlocklistMixin = e;
  },
  98,
);
