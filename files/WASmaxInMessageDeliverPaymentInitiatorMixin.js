__d(
  "WASmaxInMessageDeliverPaymentInitiatorMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "payment_initiator",
        o("WASmaxInMessageDeliverEnums").ENUM_BUYER_SELLER,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ paymentInitiator: t.value })
        : t;
    }
    l.parsePaymentInitiatorMixin = e;
  },
  98,
);
