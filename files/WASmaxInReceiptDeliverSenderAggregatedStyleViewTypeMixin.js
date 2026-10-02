__d(
  "WASmaxInReceiptDeliverSenderAggregatedStyleViewTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptNewsletterDeliverMixin",
    "WASmaxInReceiptSenderAggregatedDeliverServerIDMixin",
    "WASmaxInReceiptViewTypeMixin",
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
        "WASmaxInReceiptSenderAggregatedDeliverServerIDMixin",
      ).parseSenderAggregatedDeliverServerIDMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInReceiptViewTypeMixin").parseViewTypeMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    l.parseDeliverSenderAggregatedStyleViewTypeMixin = e;
  },
  98,
);
