__d(
  "WASmaxInReceiptSenderTypeOrRetryMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInReceiptRetryMixin",
    "WASmaxInReceiptSenderTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptSenderTypeMixin").parseSenderTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = o("WASmaxInReceiptRetryMixin").parseRetryMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Retry", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SenderType", "Retry"],
            [t, n],
          );
    }
    l.parseSenderTypeOrRetryMixinGroup = e;
  },
  98,
);
