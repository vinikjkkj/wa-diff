__d(
  "WASmaxInPreKeysNotificationLowCountRequest",
  [
    "WAResultOrError",
    "WASmaxInPreKeysLowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup",
    "WASmaxInPreKeysServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "encrypt",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInPreKeysServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInPreKeysLowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup",
      ).parseLowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value, type: r.value }, a.value, {
              lowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    l.parseNotificationLowCountRequest = e;
  },
  98,
);
