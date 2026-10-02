__d(
  "WASmaxInPreKeysNotificationLowCountLowCountLegacyOnlyMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "value",
        0,
        2e4,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ countValue: r.value })
        : r;
    }
    l.parseNotificationLowCountLowCountLegacyOnlyMixin = e;
  },
  98,
);
