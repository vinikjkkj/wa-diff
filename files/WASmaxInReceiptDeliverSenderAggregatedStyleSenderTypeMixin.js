__d(
  "WASmaxInReceiptDeliverSenderAggregatedStyleSenderTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup",
    "WASmaxInReceiptSenderAggregatedDeliverMixin",
    "WASmaxInReceiptSenderTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o(
        "WASmaxInReceiptSenderAggregatedDeliverMixin",
      ).parseSenderAggregatedDeliverMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptSenderTypeMixin").parseSenderTypeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInReceiptIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup",
      ).parseIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup(
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup:
                a.value,
            }),
          )
        : a;
    }
    l.parseDeliverSenderAggregatedStyleSenderTypeMixin = e;
  },
  98,
);
