__d(
  "WASmaxInMessageDeliverBRP2MHPPTransactionMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is_hpp",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "gateway_name",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            isHpp: n.value,
            gatewayName: r.value,
          })
        : r;
    }
    l.parseBRP2MHPPTransactionMixin = e;
  },
  98,
);
