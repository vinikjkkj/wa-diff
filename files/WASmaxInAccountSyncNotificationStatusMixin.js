__d(
  "WASmaxInAccountSyncNotificationStatusMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "dhash");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentString(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            dhash: n.value,
            elementValue: r.value,
          })
        : r;
    }
    l.parseNotificationStatusMixin = e;
  },
  98,
);
