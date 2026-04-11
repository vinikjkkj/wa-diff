__d(
  "WASmaxOutAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutAccountSetPaymentsTOSv3BRConsumerPaymentsTOSv3Mixin",
    "WASmaxOutAccountSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.setPaymentsTOSv3BRConsumerPaymentsTOSv3)
        return o(
          "WASmaxOutAccountSetPaymentsTOSv3BRConsumerPaymentsTOSv3Mixin",
        ).mergeSetPaymentsTOSv3BRConsumerPaymentsTOSv3Mixin(
          e,
          t.setPaymentsTOSv3BRConsumerPaymentsTOSv3,
        );
      if (t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3)
        return o(
          "WASmaxOutAccountSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin",
        ).mergeSetPaymentsTOSv3UPIConsumerPaymentsTOSv3Mixin(
          e,
          t.setPaymentsTOSv3UPIConsumerPaymentsTOSv3,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroup =
      e;
  },
  98,
);
