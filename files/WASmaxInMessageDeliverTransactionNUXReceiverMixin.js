__d(
  "WASmaxInMessageDeliverTransactionNUXReceiverMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "is-nux-receiver",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ isNuxReceiver: n.value })
        : n;
    }
    l.parseTransactionNUXReceiverMixin = e;
  },
  98,
);
