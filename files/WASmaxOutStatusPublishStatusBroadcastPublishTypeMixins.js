__d(
  "WASmaxOutStatusPublishStatusBroadcastPublishTypeMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusBroadcastDirectedMixin",
    "WASmaxOutStatusPublishStatusBroadcastRegularMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.statusBroadcastRegular)
        return o(
          "WASmaxOutStatusPublishStatusBroadcastRegularMixin",
        ).mergeStatusBroadcastRegularMixin(e, t.statusBroadcastRegular);
      if (t.statusBroadcastDirected)
        return o(
          "WASmaxOutStatusPublishStatusBroadcastDirectedMixin",
        ).mergeStatusBroadcastDirectedMixin(e, t.statusBroadcastDirected);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusBroadcastPublishTypeMixins = e;
  },
  98,
);
