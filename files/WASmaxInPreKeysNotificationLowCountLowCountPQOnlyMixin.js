__d(
  "WASmaxInPreKeysNotificationLowCountLowCountPQOnlyMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pq_count");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        n.value,
        "value",
        0,
        5e3,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ pqCountValue: r.value })
        : r;
    }
    l.parseNotificationLowCountLowCountPQOnlyMixin = e;
  },
  98,
);
