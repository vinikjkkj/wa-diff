__d(
  "WASmaxOutMessagePublishMetaScheduledOrUnscheduleMessageMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishMetaScheduledMessageMixin",
    "WASmaxOutMessagePublishMetaUnscheduleMessageMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.metaScheduledMessage)
        return o(
          "WASmaxOutMessagePublishMetaScheduledMessageMixin",
        ).mergeMetaScheduledMessageMixin(e, t.metaScheduledMessage);
      if (t.metaUnscheduleMessage)
        return o(
          "WASmaxOutMessagePublishMetaUnscheduleMessageMixin",
        ).mergeMetaUnscheduleMessageMixin(e, t.metaUnscheduleMessage);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMetaScheduledOrUnscheduleMessageMixinGroup = e;
  },
  98,
);
