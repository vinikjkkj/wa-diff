__d(
  "WASmaxInAccountSyncNotificationDisappearingModeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "disappearing_mode");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "duration", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ duration: n.value, t: r.value })
        : r;
    }
    l.parseNotificationDisappearingModeMixin = e;
  },
  98,
);
