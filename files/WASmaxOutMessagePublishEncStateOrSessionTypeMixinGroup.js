__d(
  "WASmaxOutMessagePublishEncStateOrSessionTypeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncSessionTypeMixin",
    "WASmaxOutMessagePublishEncStateMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.encState)
        return o("WASmaxOutMessagePublishEncStateMixin").mergeEncStateMixin(
          e,
          t.encState,
        );
      if (t.isEncSessionType)
        return o(
          "WASmaxOutMessagePublishEncSessionTypeMixin",
        ).mergeEncSessionTypeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncStateOrSessionTypeMixinGroup = e;
  },
  98,
);
