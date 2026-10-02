__d(
  "WASmaxInReceiptDeliverSingleStyleWithRecipientMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
    "WASmaxInReceiptDeliverSenderPNMixin",
    "WASmaxInReceiptIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup",
    "WASmaxInReceiptSenderTypeOrRetryMixinGroup",
    "WASmaxInReceiptSingleMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
        ).parseDeliverPaidConversationAggregatedMixin(e),
        a = o("WASmaxInReceiptDeliverSenderPNMixin").parseDeliverSenderPNMixin(
          e,
        ),
        i = o(
          "WASmaxInReceiptIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup",
        ).parseIndividualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup(
          e,
        );
      if (!i.success) return i;
      var l = o(
        "WASmaxInReceiptSenderTypeOrRetryMixinGroup",
      ).parseSenderTypeOrRetryMixinGroup(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              deliverPaidConversationAggregatedMixin: r.success
                ? r.value
                : null,
              deliverSenderPNMixin: a.success ? a.value : null,
              individualWithRecipientOrGroupOrDeliverStatusOrBroadcastMixinGroup:
                i.value,
              senderTypeOrRetryMixinGroup: l.value,
            }),
          )
        : l;
    }
    l.parseDeliverSingleStyleWithRecipientMixin = e;
  },
  98,
);
