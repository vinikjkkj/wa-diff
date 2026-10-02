__d(
  "WASmaxInOfflineCompletionRequest",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "offline");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            offlineCount: a.value,
          })
        : a;
    }
    l.parseCompletionRequest = e;
  },
  98,
);
