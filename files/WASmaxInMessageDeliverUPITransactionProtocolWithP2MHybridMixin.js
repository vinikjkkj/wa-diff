__d(
  "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBillMetadataMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxInMessageDeliverP2MHybridExternalPaymentMethodMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "external_payment_method");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverP2MHybridExternalPaymentMethodMixin",
      ).parseP2MHybridExternalPaymentMethodMixin(e);
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "fee");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "gst");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount_modifiers");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "fee", c);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "gst", d);
      return r.success
        ? o("WAResultOrError").makeResult({ fee: n.value, gst: r.value })
        : r;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bill_metadata");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverBillMetadataMixin",
      ).parseBillMetadataMixin(e);
      return (n.success, n);
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payment_link");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "order_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "message_id");
      return r.success
        ? o("WAResultOrError").makeResult({
            orderId: n.value,
            messageId: r.value,
          })
        : r;
    }
    function f(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "transaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "external_payment_method",
        s,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "offer_amount", u);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "amount_modifiers",
        m,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(t, "bill_metadata", p);
      if (!l.success) return l;
      var c = o("WASmaxParseUtils").optionalChildWithTag(t, "payment_link", _);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "is_p2m_hybrid",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!d.success) return d;
      var f = o("WASmaxParseUtils").attrStringEnum(
        t,
        "payment_instrument_type",
        o("WASmaxInMessageDeliverEnums").ENUM_HPPPAYMENTLINK_UPI,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(t, "offer", 0, 255, e);
      return g.success
        ? o("WAResultOrError").makeResult({
            isP2mHybrid: d.value,
            paymentInstrumentType: f.value,
            externalPaymentMethod: r.value,
            offerAmount: a.value,
            amountModifiers: i.value,
            billMetadata: l.value,
            paymentLink: c.value,
            offer: g.value,
          })
        : g;
    }
    ((l.parseUPITransactionProtocolWithP2MHybridOffer = e),
      (l.parseUPITransactionProtocolWithP2MHybridExternalPaymentMethod = s),
      (l.parseUPITransactionProtocolWithP2MHybridOfferAmount = u),
      (l.parseUPITransactionProtocolWithP2MHybridAmountModifiersFee = c),
      (l.parseUPITransactionProtocolWithP2MHybridAmountModifiersGst = d),
      (l.parseUPITransactionProtocolWithP2MHybridAmountModifiers = m),
      (l.parseUPITransactionProtocolWithP2MHybridBillMetadata = p),
      (l.parseUPITransactionProtocolWithP2MHybridPaymentLink = _),
      (l.parseUPITransactionProtocolWithP2MHybridMixin = f));
  },
  98,
);
