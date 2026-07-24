__d(
  "WASmaxInBrPaymentBROrMXOrESCardMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentBRCardMixin",
    "WASmaxInBrPaymentESCardMixin",
    "WASmaxInBrPaymentMXCardMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInBrPaymentBRCardMixin").parseBRCardMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BRCard",
          value: t.value,
        });
      var n = o("WASmaxInBrPaymentMXCardMixin").parseMXCardMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MXCard",
          value: n.value,
        });
      var r = o("WASmaxInBrPaymentESCardMixin").parseESCardMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({ name: "ESCard", value: r.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BRCard", "MXCard", "ESCard"],
            [t, n, r],
          );
    }
    l.parseBROrMXOrESCardMixinGroup = e;
  },
  98,
);
