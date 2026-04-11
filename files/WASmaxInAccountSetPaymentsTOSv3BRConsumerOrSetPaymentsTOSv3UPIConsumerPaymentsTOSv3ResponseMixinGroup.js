__d(
  "WASmaxInAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInAccountSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin",
    "WASmaxInAccountSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin",
      ).parseSetPaymentsTOSv3BRConsumerPaymentsTOSv3ResponseMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SetPaymentsTOSv3BRConsumerPaymentsTOSv3Response",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixin",
      ).parseSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "SetPaymentsTOSv3UPIConsumerPaymentsTOSv3Response",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BRConsumerPaymentsTOSv3Response",
              "UPIConsumerPaymentsTOSv3Response",
            ],
            [t, n],
          );
    }
    l.parseSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3ResponseMixinGroup =
      e;
  },
  98,
);
