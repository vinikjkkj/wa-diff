__d(
  "WASmaxInMessageDeliverBizPricingDataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "pricing");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "consumer_country_code",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "business_country_code",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizPricingConsumerCountryCode: a.value,
            bizPricingBusinessCountryCode: i.value,
          })
        : i;
    }
    l.parseBizPricingDataMixin = e;
  },
  98,
);
