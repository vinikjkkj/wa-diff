__d(
  "WASmaxOutAccountSetPaymentsTOSv3Request",
  [
    "WASmaxJsx",
    "WASmaxOutAccountSetIQMixin",
    "WASmaxOutAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroup",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.acceptPayTosVersion,
        n =
          e.setPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroupArgs,
        r = o("WASmaxOutAccountSetIQMixin").mergeSetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutAccountSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroup",
            ).mergeSetPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroup(
              o("WASmaxJsx").smax("accept_pay", {
                version: "3",
                tos_version: o("WAWap").INT(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    l.makeSetPaymentsTOSv3Request = e;
  },
  98,
);
