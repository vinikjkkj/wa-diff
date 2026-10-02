__d(
  "WASmaxInPreKeysNotificationLowCountLowCountBothMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysNotificationLowCountLowCountLegacyOnlyMixin",
    "WASmaxInPreKeysNotificationLowCountLowCountPQOnlyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o(
        "WASmaxInPreKeysNotificationLowCountLowCountLegacyOnlyMixin",
      ).parseNotificationLowCountLowCountLegacyOnlyMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInPreKeysNotificationLowCountLowCountPQOnlyMixin",
      ).parseNotificationLowCountLowCountPQOnlyMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseNotificationLowCountLowCountBothMixin = e;
  },
  98,
);
