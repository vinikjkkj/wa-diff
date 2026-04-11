__d(
  "WASmaxInBizSettingsSyncPrivacySettingRequest",
  [
    "WAResultOrError",
    "WASmaxInBizSettingsServerNotificationMixin",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!i.success) return i;
      var l = o(
          "WASmaxInBizSettingsSmbDataSharingSettingMixin",
        ).parseSmbDataSharingSettingMixin(n.value),
        s = o(
          "WASmaxInBizSettingsServerNotificationMixin",
        ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                to: a.value,
                type: i.value,
                privacySmbDataSharingSettingMixin: l.success ? l.value : null,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseSyncPrivacySettingRequest = e;
  },
  98,
);
