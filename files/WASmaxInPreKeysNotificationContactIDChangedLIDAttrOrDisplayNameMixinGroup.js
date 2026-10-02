__d(
  "WASmaxInPreKeysNotificationContactIDChangedLIDAttrOrDisplayNameMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysDisplayNameMixin",
    "WASmaxInPreKeysNotificationContactIDChangedLIDAttrMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysNotificationContactIDChangedLIDAttrMixin",
      ).parseNotificationContactIDChangedLIDAttrMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationContactIDChangedLIDAttr",
          value: t.value,
        });
      var n = o("WASmaxInPreKeysDisplayNameMixin").parseDisplayNameMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "DisplayName",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["LIDAttr", "DisplayName"],
            [t, n],
          );
    }
    l.parseNotificationContactIDChangedLIDAttrOrDisplayNameMixinGroup = e;
  },
  98,
);
