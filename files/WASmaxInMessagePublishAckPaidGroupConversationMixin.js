__d(
  "WASmaxInMessagePublishAckPaidGroupConversationMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "pricing");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "business_country_code",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            bizPricingBusinessCountryCode: a.value,
          })
        : a;
    }
    l.parseAckPaidGroupConversationMixin = e;
  },
  98,
);
