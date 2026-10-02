__d(
  "WASmaxInAccountSyncNotificationContactBlacklistWithAdditionalDataMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "action");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(e, "jid");
      return r.success
        ? o("WAResultOrError").makeResult({ action: n.value, jid: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "category");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t, "dhash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "prev_dhash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "user", 0, 1e3, e);
      return i.success
        ? o("WAResultOrError").makeResult({
            dhash: r.value,
            prevDhash: a.value,
            user: i.value,
          })
        : i;
    }
    ((l.parseNotificationContactBlacklistWithAdditionalDataUser = e),
      (l.parseNotificationContactBlacklistWithAdditionalDataMixin = s));
  },
  98,
);
