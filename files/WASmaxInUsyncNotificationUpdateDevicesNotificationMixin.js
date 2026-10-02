__d(
  "WASmaxInUsyncNotificationUpdateDevicesNotificationMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "update");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "hash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "lid_hash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            updateHash: r.value,
            updateLidHash: a.value,
          })
        : a;
    }
    l.parseNotificationUpdateDevicesNotificationMixin = e;
  },
  98,
);
