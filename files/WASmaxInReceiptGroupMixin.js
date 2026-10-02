__d(
  "WASmaxInReceiptGroupMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptBotIsLIDFlagMixin",
    "WASmaxInReceiptEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInReceiptEnums").DEVICEJID_DEVICEJID_USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptBotIsLIDFlagMixin").parseBotIsLIDFlagMixin(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        botIsLIDFlagMixin: a.success ? a.value : null,
      });
    }
    l.parseGroupMixin = e;
  },
  98,
);
