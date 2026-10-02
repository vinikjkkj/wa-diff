__d(
  "WASmaxInMessageDeliverRecipientCountryCodeMetaTagMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(
        n.value,
        "recipient_country_code",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaRecipientCountryCode: r.value })
        : r;
    }
    l.parseRecipientCountryCodeMetaTagMixin = e;
  },
  98,
);
