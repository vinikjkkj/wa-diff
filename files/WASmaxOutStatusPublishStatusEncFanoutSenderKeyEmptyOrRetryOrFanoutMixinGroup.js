__d(
  "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusEncFanoutMixin",
    "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyMixin",
    "WASmaxOutStatusPublishStatusEncRetryMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusEncFanoutSenderKeyEmpty)
        return o(
          "WASmaxOutStatusPublishStatusEncFanoutSenderKeyEmptyMixin",
        ).mergeStatusEncFanoutSenderKeyEmptyMixin(
          e,
          t.statusEncFanoutSenderKeyEmpty,
        );
      if (t.statusEncRetry)
        return o(
          "WASmaxOutStatusPublishStatusEncRetryMixin",
        ).mergeStatusEncRetryMixin(e, t.statusEncRetry);
      if (t.statusEncFanout)
        return o(
          "WASmaxOutStatusPublishStatusEncFanoutMixin",
        ).mergeStatusEncFanoutMixin(e, t.statusEncFanout);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroup = e;
  },
  98,
);
