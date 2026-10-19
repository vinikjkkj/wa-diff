__d(
  "WASmaxDirtyBitsNotifyRPC",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notify", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
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
      var i = o("WASmaxParseUtils").attrStringEnum(n.value, "type", u);
      return i.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            dirtyTimestamp: a.value,
            dirtyType: i.value,
          })
        : i;
    }
    var u = {
      account_sync: "account_sync",
      event_metadata: "event_metadata",
      groups: "groups",
      native_contact_restore: "native_contact_restore",
      newsletter_metadata: "newsletter_metadata",
      orgs: "orgs",
      syncd_app_state: "syncd_app_state",
    };
    ((l.receiveNotifyRPC = e),
      (l.parseNotifyRequest = s),
      (l.ENUM_ACCOUNTSYNC_EVENTMETADATA_GROUPS_NATIVECONTACTRESTORE_NEWSLETTERMETADATA_ORGS_SYNCDAPPSTATE =
        u));
  },
  98,
);
