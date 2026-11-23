__d(
  "WASmaxOutMessagePublishUPIPublishSendPayNodeP2MMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishMoneyMixin",
    "WASmaxOutMessagePublishOrderMessageMixin",
    "WASmaxOutMessagePublishPaymentInitiatorMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.splitArgs,
        n = e.orderArgs,
        r = e.paymentLinkArgs,
        a = o("WASmaxJsx").smax(
          "upi",
          null,
          o("WASmaxChildren").OPTIONAL_CHILD(s, t),
          o("WASmaxChildren").OPTIONAL_CHILD(u, n),
          o("WASmaxChildren").OPTIONAL_CHILD(c, r),
        );
      return a;
    }
    function s(e) {
      var t = e.cconfeeArgs,
        n = e.ppconfeeArgs,
        r = o("WASmaxJsx").smax(
          "split",
          null,
          o("WASmaxChildren").OPTIONAL_CHILD(d, t),
          o("WASmaxChildren").OPTIONAL_CHILD(m, n),
        );
      return r;
    }
    function u(e) {
      var t = o(
        "WASmaxOutMessagePublishOrderMessageMixin",
      ).mergeOrderMessageMixin(o("WASmaxJsx").smax("order", null), e);
      return t;
    }
    function c(e) {
      var t = e.paymentLinkOrderId,
        n = e.paymentLinkMessageId,
        r = o("WASmaxJsx").smax("payment_link", {
          order_id: o("WAWap").CUSTOM_STRING(t),
          message_id: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function d(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("cconfee", null),
        e,
      );
      return t;
    }
    function m(e) {
      var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(
        o("WASmaxJsx").smax("ppconfee", null),
        e,
      );
      return t;
    }
    function p(t) {
      var n = t.upiArgs,
        r = t.paymentInitiatorMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishPaymentInitiatorMixin")
            .mergePaymentInitiatorMixin,
          o("WASmaxJsx").smax(
            "pay",
            { "transaction-type": "p2m" },
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
          r,
        );
      return a;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeUPIPublishSendPayNodeP2MUpi = e),
      (l.makeUPIPublishSendPayNodeP2MUpiSplit = s),
      (l.makeUPIPublishSendPayNodeP2MUpiOrder = u),
      (l.makeUPIPublishSendPayNodeP2MUpiPaymentLink = c),
      (l.makeUPIPublishSendPayNodeP2MUpiSplitCconfee = d),
      (l.makeUPIPublishSendPayNodeP2MUpiSplitPpconfee = m),
      (l.mergeUPIPublishSendPayNodeP2MMixin = _));
  },
  98,
);
