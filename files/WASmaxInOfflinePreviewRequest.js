__d(
  "WASmaxInOfflinePreviewRequest",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "offline_preview");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "count", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(n.value, "message", 0, void 0);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(n.value, "receipt", 0, void 0);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "notification",
        0,
        void 0,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(n.value, "appdata", 0, void 0);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrIntRange(n.value, "call", 0, void 0);
      return c.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            offlinePreviewCount: a.value,
            offlinePreviewMessage: i.value,
            offlinePreviewReceipt: l.value,
            offlinePreviewNotification: s.value,
            offlinePreviewAppdata: u.value,
            offlinePreviewCall: c.value,
          })
        : c;
    }
    l.parsePreviewRequest = e;
  },
  98,
);
