__d(
  "WASmaxInMessageDeliverXBMessageDeliverSendNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sender_amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receiver_amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "pay");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "sender_amount", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "receiver_amount",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "country",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums").ENUM_P2P_REMITTANCE,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "status",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "partner_name",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender_name",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver_name",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver_country",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "partner-transaction-id",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "tracking-url",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender_tracking_url",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-created-timestamp",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-updated-timestamp",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-estimated-delivery-timestamp",
      );
      return b.success
        ? o("WAResultOrError").makeResult({
            transactionId: i.value,
            country: l.value,
            transactionType: u.value,
            status: c.value,
            partnerName: d.value,
            senderName: m.value,
            receiverName: p.value,
            receiverCountry: _.value,
            partnerTransactionId: f.value,
            trackingUrl: g.value,
            senderTrackingUrl: h.value,
            transactionCreatedTimestamp: y.value,
            transactionUpdatedTimestamp: C.value,
            transactionEstimatedDeliveryTimestamp: b.value,
            senderAmount: r.value,
            receiverAmount: a.value,
          })
        : b;
    }
    ((l.parseXBMessageDeliverSendNodeSenderAmount = e),
      (l.parseXBMessageDeliverSendNodeReceiverAmount = s),
      (l.parseXBMessageDeliverSendNodeMixin = u));
  },
  98,
);
