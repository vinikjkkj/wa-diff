__d(
  "WASmaxInPreKeysNotificationDigestRequest",
  [
    "WAResultOrError",
    "WASmaxInPreKeysServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "digest");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "encrypt",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInPreKeysServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, type: a.value }, i.value),
          )
        : i;
    }
    l.parseNotificationDigestRequest = e;
  },
  98,
);
