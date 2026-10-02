__d(
  "WASmaxInOfflineThreadMetadataRequest",
  [
    "WAResultOrError",
    "WASmaxInOfflineEnums",
    "WASmaxInOfflineThreadMetadataDelayedMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInOfflineEnums").GROUPJID_USERJID_USERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({ from: n.value, t: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "ib");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "thread_metadata");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInOfflineThreadMetadataDelayedMixin",
        ).parseThreadMetadataDelayedMixin(r.value),
        l = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "item", 0, 50, e);
      return l.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            threadMetadataThreadMetadataDelayedMixin: i.success
              ? i.value
              : null,
            threadMetadataItem: l.value,
          })
        : l;
    }
    ((l.parseThreadMetadataRequestThreadMetadataItem = e),
      (l.parseThreadMetadataRequest = s));
  },
  98,
);
