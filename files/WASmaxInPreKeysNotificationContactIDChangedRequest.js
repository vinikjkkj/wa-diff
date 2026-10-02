__d(
  "WASmaxInPreKeysNotificationContactIDChangedRequest",
  [
    "WAResultOrError",
    "WASmaxInPreKeysCloudAPIGroupListMixin",
    "WASmaxInPreKeysNotificationContactIDChangedLIDAttrOrDisplayNameMixinGroup",
    "WASmaxInPreKeysServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "identity");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "from");
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
      if (!i.success) return i;
      var l = o(
          "WASmaxInPreKeysCloudAPIGroupListMixin",
        ).parseCloudAPIGroupListMixin(e),
        s = o(
          "WASmaxInPreKeysNotificationContactIDChangedLIDAttrOrDisplayNameMixinGroup",
        ).parseNotificationContactIDChangedLIDAttrOrDisplayNameMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ from: r.value, type: a.value }, i.value, {
          cloudAPIGroupListMixin: l.success ? l.value : null,
          notificationContactIDChangedLIDAttrOrDisplayNameMixinGroup: s.success
            ? s.value
            : null,
        }),
      );
    }
    l.parseNotificationContactIDChangedRequest = e;
  },
  98,
);
