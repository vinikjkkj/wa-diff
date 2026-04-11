__d(
  "WASmaxOutSpamMessagePayloadTypes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutSpamMessageWithPaymentReportMixin",
    "WASmaxOutSpamMessageWithPollMixin",
    "WASmaxOutSpamMessageWithTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.messageWithPaymentReport)
        return o(
          "WASmaxOutSpamMessageWithPaymentReportMixin",
        ).mergeMessageWithPaymentReportMixin(e, t.messageWithPaymentReport);
      if (t.messageWithType)
        return o("WASmaxOutSpamMessageWithTypeMixin").mergeMessageWithTypeMixin(
          e,
          t.messageWithType,
        );
      if (t.messageWithPoll)
        return o("WASmaxOutSpamMessageWithPollMixin").mergeMessageWithPollMixin(
          e,
          t.messageWithPoll,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMessagePayloadTypes = e;
  },
  98,
);
