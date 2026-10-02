__d(
  "WASmaxInMessageDeliverP2MHybridExternalPaymentMethodMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInMessageDeliverEnums").ENUM_CARD_NETBANKING_UPI_WALLET,
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success
        ? o("WAResultOrError").makeResult({ type: t.value, name: n.value })
        : n;
    }
    l.parseP2MHybridExternalPaymentMethodMixin = e;
  },
  98,
);
