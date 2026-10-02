__d(
  "WASmaxInMessageDeliverXBTransactionMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverMoneyMixin", "WASmaxParseUtils"],
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
      var n = o("WASmaxParseUtils").assertTag(t, "transaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "sender_amount", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "receiver_amount",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(t, "transaction_id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-type",
        "remittance",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "country",
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
      var f = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "send",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "partner-transaction-id",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "tracking-url",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender_tracking_url",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-created-timestamp",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-updated-timestamp",
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-estimated-delivery-timestamp",
      );
      return v.success
        ? o("WAResultOrError").makeResult({
            transactionId: i.value,
            transactionType: l.value,
            country: u.value,
            status: c.value,
            partnerName: d.value,
            senderName: m.value,
            receiverName: p.value,
            receiverCountry: _.value,
            type: f.value,
            partnerTransactionId: g.value,
            trackingUrl: h.value,
            senderTrackingUrl: y.value,
            transactionCreatedTimestamp: C.value,
            transactionUpdatedTimestamp: b.value,
            transactionEstimatedDeliveryTimestamp: v.value,
            senderAmount: r.value,
            receiverAmount: a.value,
          })
        : v;
    }
    ((l.parseXBTransactionSenderAmount = e),
      (l.parseXBTransactionReceiverAmount = s),
      (l.parseXBTransactionMixin = u));
  },
  98,
);
