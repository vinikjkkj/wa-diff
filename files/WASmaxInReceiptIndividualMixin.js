__d(
  "WASmaxInReceiptIndividualMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptEnums",
    "WASmaxInReceiptRecipientMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums")
          .DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        o("WASmaxInReceiptEnums").USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptRecipientMixin").parseRecipientMixin(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        recipientMixin: a.success ? a.value : null,
      });
    }
    l.parseIndividualMixin = e;
  },
  98,
);
