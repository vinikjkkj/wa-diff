__d(
  "WASmaxInReceiptDeliverSenderAggregatedStyleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverBizRolesMixin",
    "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
    "WASmaxInReceiptDeliverSenderPNMixin",
    "WASmaxInReceiptIndividualOrGroupOrDeliverStatusOrBroadcastMixinGroup",
    "WASmaxInReceiptRecipientMixin",
    "WASmaxInReceiptSenderAggregatedDeliverMixin",
    "WASmaxInReceiptSenderAggregatedStyleReceiptType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRecipientMixin").parseRecipientMixin(e),
        r = o(
          "WASmaxInReceiptSenderAggregatedDeliverMixin",
        ).parseSenderAggregatedDeliverMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
        ).parseDeliverPaidConversationAggregatedMixin(e),
        i = o("WASmaxInReceiptDeliverBizRolesMixin").parseDeliverBizRolesMixin(
          e,
        ),
        l = o("WASmaxInReceiptDeliverSenderPNMixin").parseDeliverSenderPNMixin(
          e,
        ),
        s = o(
          "WASmaxInReceiptIndividualOrGroupOrDeliverStatusOrBroadcastMixinGroup",
        ).parseIndividualOrGroupOrDeliverStatusOrBroadcastMixinGroup(e);
      if (!s.success) return s;
      var u = o(
        "WASmaxInReceiptSenderAggregatedStyleReceiptType",
      ).parseSenderAggregatedStyleReceiptType(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { recipientMixin: n.success ? n.value : null },
          r.value,
          {
            deliverPaidConversationAggregatedMixin: a.success ? a.value : null,
            deliverBizRolesMixin: i.success ? i.value : null,
            deliverSenderPNMixin: l.success ? l.value : null,
            individualOrGroupOrDeliverStatusOrBroadcastMixinGroup: s.value,
            senderAggregatedStyleReceiptType: u.success ? u.value : null,
          },
        ),
      );
    }
    l.parseDeliverSenderAggregatedStyleMixin = e;
  },
  98,
);
