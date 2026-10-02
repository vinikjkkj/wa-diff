__d(
  "WASmaxInReceiptReceiptStyles",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverAggregatedByMessageIdStyleMixin",
    "WASmaxInReceiptDeliverMessageAggregatedStyleMixin",
    "WASmaxInReceiptDeliverSenderAggregatedStyleMixin",
    "WASmaxInReceiptDeliverSenderAggregatedStyleNewsletterSelfTypeMixin",
    "WASmaxInReceiptDeliverSenderAggregatedStyleSenderTypeMixin",
    "WASmaxInReceiptDeliverSenderAggregatedStyleViewTypeMixin",
    "WASmaxInReceiptDeliverSingleStyleMixin",
    "WASmaxInReceiptDeliverSingleStyleWithRecipientMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptDeliverMessageAggregatedStyleMixin",
      ).parseDeliverMessageAggregatedStyleMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverMessageAggregatedStyle",
          value: t.value,
        });
      var n = o(
        "WASmaxInReceiptDeliverAggregatedByMessageIdStyleMixin",
      ).parseDeliverAggregatedByMessageIdStyleMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverAggregatedByMessageIdStyle",
          value: n.value,
        });
      var r = o(
        "WASmaxInReceiptDeliverSenderAggregatedStyleSenderTypeMixin",
      ).parseDeliverSenderAggregatedStyleSenderTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleSenderType",
          value: r.value,
        });
      var a = o(
        "WASmaxInReceiptDeliverSenderAggregatedStyleViewTypeMixin",
      ).parseDeliverSenderAggregatedStyleViewTypeMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleViewType",
          value: a.value,
        });
      var i = o(
        "WASmaxInReceiptDeliverSenderAggregatedStyleNewsletterSelfTypeMixin",
      ).parseDeliverSenderAggregatedStyleNewsletterSelfTypeMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleNewsletterSelfType",
          value: i.value,
        });
      var l = o(
        "WASmaxInReceiptDeliverSenderAggregatedStyleMixin",
      ).parseDeliverSenderAggregatedStyleMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyle",
          value: l.value,
        });
      var s = o(
        "WASmaxInReceiptDeliverSingleStyleWithRecipientMixin",
      ).parseDeliverSingleStyleWithRecipientMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSingleStyleWithRecipient",
          value: s.value,
        });
      var u = o(
        "WASmaxInReceiptDeliverSingleStyleMixin",
      ).parseDeliverSingleStyleMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverSingleStyle",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "MessageAggregatedStyle",
              "AggregatedByMessageIdStyle",
              "SenderAggregatedStyleSenderType",
              "SenderAggregatedStyleViewType",
              "SenderAggregatedStyleNewsletterSelfType",
              "SenderAggregatedStyle",
              "SingleStyleWithRecipient",
              "SingleStyle",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    l.parseReceiptStyles = e;
  },
  98,
);
