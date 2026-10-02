__d(
  "WASmaxInDirtyBitsNotifyRequest",
  [
    "WAResultOrError",
    "WASmaxInDirtyBitsEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "dirty");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "timestamp",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "type",
        o("WASmaxInDirtyBitsEnums")
          .ENUM_ACCOUNTSYNC_GROUPS_NATIVECONTACTRESTORE_NEWSLETTERMETADATA_SYNCDAPPSTATE,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            dirtyTimestamp: a.value,
            dirtyType: i.value,
          })
        : i;
    }
    l.parseNotifyRequest = e;
  },
  98,
);
