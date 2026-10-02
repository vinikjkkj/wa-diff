__d(
  "WASmaxInMultiwaydMultiwayNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInMultiwaydServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "multiway");
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
        "fb:multiway",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "transaction_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrInt(n.value, "binary_version");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(n.value, 1, void 0);
      if (!s.success) return s;
      var u = o(
        "WASmaxInMultiwaydServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                multiwayTransactionId: i.value,
                multiwayBinaryVersion: l.value,
                multiwayElementValue: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseMultiwayNotificationRequest = e;
  },
  98,
);
