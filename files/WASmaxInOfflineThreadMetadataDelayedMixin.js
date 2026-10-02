__d(
  "WASmaxInOfflineThreadMetadataDelayedMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "from");
      return n.success ? o("WAResultOrError").makeResult({ from: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "status_msgs");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(t, "count", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "item", 1, 1 / 0, e);
      return a.success
        ? o("WAResultOrError").makeResult({ count: r.value, item: a.value })
        : a;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notifications");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "count", 0, void 0);
      return n.success
        ? o("WAResultOrError").makeResult({ count: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "thread_metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "status_msgs", s);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "notifications", u);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusMsgs: n.value,
            notifications: r.value,
          })
        : r;
    }
    ((l.parseThreadMetadataDelayedStatusMsgsItem = e),
      (l.parseThreadMetadataDelayedStatusMsgs = s),
      (l.parseThreadMetadataDelayedNotifications = u),
      (l.parseThreadMetadataDelayedMixin = c));
  },
  98,
);
