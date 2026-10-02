__d(
  "WASmaxInMessageDeliverBRTransactionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRP2MHPPTransactionMixin",
    "WASmaxInMessageDeliverFullTransactionBaseMixin",
    "WASmaxInMessageDeliverP2MTransactionProtocolMixin",
    "WASmaxInMessageDeliverPaymentInitiatorMixin",
    "WASmaxInMessageDeliverTransactionNUXReceiverMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverFullTransactionBaseMixin",
      ).parseFullTransactionBaseMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverTransactionNUXReceiverMixin",
      ).parseTransactionNUXReceiverMixin(e);
      if (!r.success) return r;
      var a = o(
          "WASmaxInMessageDeliverBRP2MHPPTransactionMixin",
        ).parseBRP2MHPPTransactionMixin(e),
        i = o(
          "WASmaxInMessageDeliverP2MTransactionProtocolMixin",
        ).parseP2MTransactionProtocolMixin(e),
        l = o(
          "WASmaxInMessageDeliverPaymentInitiatorMixin",
        ).parsePaymentInitiatorMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          bRP2MHPPTransactionMixin: a.success ? a.value : null,
          p2MTransactionProtocolMixin: i.success ? i.value : null,
          paymentInitiatorMixin: l.success ? l.value : null,
        }),
      );
    }
    l.parseBRTransactionMixin = e;
  },
  98,
);
