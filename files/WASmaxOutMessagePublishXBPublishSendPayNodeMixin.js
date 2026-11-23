__d(
  "WASmaxOutMessagePublishXBPublishSendPayNodeMixin",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMoneyMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("sender_amount", null),
        e,
      );
      return t;
    }
    function s(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("receiver_amount", null),
        e,
      );
      return t;
    }
    function u(t) {
      var n,
        r,
        a = t.senderAmountArgs,
        i = t.receiverAmountArgs,
        l = t.payTransactionId,
        u = t.payCountry,
        c = t.payTransactionType,
        d = t.payStatus,
        m = t.payPartnerName,
        p = t.payProviderType,
        _ = t.payPartnerDisplayName,
        f = t.paySenderName,
        g = t.payReceiverName,
        h = t.payReceiverCountry,
        y = t.payPartnerTransactionId,
        C = t.payTrackingUrl,
        b = t.paySenderTrackingUrl,
        v = t.payTransactionCreatedTimestamp,
        S = t.payTransactionUpdatedTimestamp,
        R = t.payTransactionEstimatedDeliveryTimestamp,
        L = t.payTransactionEstimatedDeliveryDate,
        E = o("WASmaxJsx").smax(
          "pay",
          {
            transaction_id: (n = o("WAWap")).CUSTOM_STRING(l),
            country: n.CUSTOM_STRING(u),
            "transaction-type": n.CUSTOM_STRING(c),
            status: (r = o("WASmaxAttrs")).OPTIONAL(n.CUSTOM_STRING, d),
            partner_name: r.OPTIONAL(n.CUSTOM_STRING, m),
            provider_type: r.OPTIONAL(n.CUSTOM_STRING, p),
            partner_display_name: r.OPTIONAL(n.CUSTOM_STRING, _),
            sender_name: r.OPTIONAL(n.CUSTOM_STRING, f),
            receiver_name: r.OPTIONAL(n.CUSTOM_STRING, g),
            receiver_country: r.OPTIONAL(n.CUSTOM_STRING, h),
            "partner-transaction-id": r.OPTIONAL(n.CUSTOM_STRING, y),
            "tracking-url": r.OPTIONAL(n.CUSTOM_STRING, C),
            sender_tracking_url: r.OPTIONAL(n.CUSTOM_STRING, b),
            "transaction-created-timestamp": r.OPTIONAL(n.CUSTOM_STRING, v),
            "transaction-updated-timestamp": r.OPTIONAL(n.CUSTOM_STRING, S),
            "transaction-estimated-delivery-timestamp": r.OPTIONAL(
              n.CUSTOM_STRING,
              R,
            ),
            "transaction-estimated-delivery-date": r.OPTIONAL(
              n.CUSTOM_STRING,
              L,
            ),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(e, a),
          o("WASmaxChildren").OPTIONAL_CHILD(s, i),
        );
      return E;
    }
    function c(e, t) {
      var n = u(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeXBPublishSendPayNodeSenderAmount = e),
      (l.makeXBPublishSendPayNodeReceiverAmount = s),
      (l.mergeXBPublishSendPayNodeMixin = c));
  },
  98,
);
