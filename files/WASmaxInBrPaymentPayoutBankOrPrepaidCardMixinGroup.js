__d(
  "WASmaxInBrPaymentPayoutBankOrPrepaidCardMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentPayoutBankMixin",
    "WASmaxInBrPaymentPayoutPrepaidCardMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInBrPaymentPayoutBankMixin").parsePayoutBankMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "PayoutBank",
          value: t.value,
        });
      var n = o(
        "WASmaxInBrPaymentPayoutPrepaidCardMixin",
      ).parsePayoutPrepaidCardMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PayoutPrepaidCard",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PayoutBank", "PayoutPrepaidCard"],
            [t, n],
          );
    }
    l.parsePayoutBankOrPrepaidCardMixinGroup = e;
  },
  98,
);
