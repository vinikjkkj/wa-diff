__d(
  "WASmaxInReceiptDeliverSingleStyleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptBotClientMultiThreadIDReceiptMixin",
    "WASmaxInReceiptDeliverBizRolesMixin",
    "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
    "WASmaxInReceiptDeliverSenderPNMixin",
    "WASmaxInReceiptRecipientMixin",
    "WASmaxInReceiptSingleMixin",
    "WASmaxInReceiptSingleStyleChatType",
    "WASmaxInReceiptSingleStyleReceiptType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRecipientMixin").parseRecipientMixin(e),
        r = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInReceiptDeliverPaidConversationAggregatedMixin",
        ).parseDeliverPaidConversationAggregatedMixin(e),
        i = o("WASmaxInReceiptDeliverBizRolesMixin").parseDeliverBizRolesMixin(
          e,
        ),
        l = o(
          "WASmaxInReceiptBotClientMultiThreadIDReceiptMixin",
        ).parseBotClientMultiThreadIDReceiptMixin(e),
        s = o("WASmaxInReceiptDeliverSenderPNMixin").parseDeliverSenderPNMixin(
          e,
        ),
        u = o("WASmaxInReceiptSingleStyleChatType").parseSingleStyleChatType(e);
      if (!u.success) return u;
      var c = o(
        "WASmaxInReceiptSingleStyleReceiptType",
      ).parseSingleStyleReceiptType(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { recipientMixin: n.success ? n.value : null },
          r.value,
          {
            deliverPaidConversationAggregatedMixin: a.success ? a.value : null,
            deliverBizRolesMixin: i.success ? i.value : null,
            botClientMultiThreadIDReceiptMixin: l.success ? l.value : null,
            deliverSenderPNMixin: s.success ? s.value : null,
            singleStyleChatType: u.value,
            singleStyleReceiptType: c.success ? c.value : null,
          },
        ),
      );
    }
    l.parseDeliverSingleStyleMixin = e;
  },
  98,
);
