__d(
  "WASmaxOutStatusPublishEncStateOrSessionTypeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishEncSessionTypeMixin",
    "WASmaxOutStatusPublishEncStateMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.encState)
        return o("WASmaxOutStatusPublishEncStateMixin").mergeEncStateMixin(
          e,
          t.encState,
        );
      if (t.isEncSessionType)
        return o(
          "WASmaxOutStatusPublishEncSessionTypeMixin",
        ).mergeEncSessionTypeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncStateOrSessionTypeMixinGroup = e;
  },
  98,
);
