__d(
  "WASmaxInAccountSyncNotificationNoticeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notice");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "stage", 0, 1e3);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(e, "version", 1, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(e, "type", 0, void 0);
      return l.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            stage: r.value,
            t: a.value,
            version: i.value,
            type: l.value,
          })
        : l;
    }
    l.parseNotificationNoticeMixin = e;
  },
  98,
);
