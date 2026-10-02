__d(
  "WASmaxInAccountSyncNotificationPrivacyMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncContactBlacklistData",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "category");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      if (!r.success) return r;
      var a = o(
        "WASmaxInAccountSyncContactBlacklistData",
      ).parseContactBlacklistData(e);
      return o("WAResultOrError").makeResult({
        name: n.value,
        value: r.value,
        contactBlacklistData: a.success ? a.value : null,
      });
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "privacy");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "category",
        0,
        1e3,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ category: r.value })
        : r;
    }
    ((l.parseNotificationPrivacyCategory = e),
      (l.parseNotificationPrivacyMixin = s));
  },
  98,
);
