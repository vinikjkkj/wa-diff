__d(
  "WASmaxInReceiptDeliverSenderAggregatedStyleNewsletterSelfTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptNewsletterDeliverMixin",
    "WASmaxInReceiptReadOrPlayedSelfTypeMixinGroup",
    "WASmaxInReceiptSenderAggregatedDeliverMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptNewsletterDeliverMixin",
      ).parseNewsletterDeliverMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInReceiptSenderAggregatedDeliverMixin",
      ).parseSenderAggregatedDeliverMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInReceiptReadOrPlayedSelfTypeMixinGroup",
      ).parseReadOrPlayedSelfTypeMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              readOrPlayedSelfTypeMixinGroup: a.value,
            }),
          )
        : a;
    }
    l.parseDeliverSenderAggregatedStyleNewsletterSelfTypeMixin = e;
  },
  98,
);
