__d(
  "WASmaxOutDirtyBitsTypeCleanOrCleanWithTimestampMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutDirtyBitsCleanTypeMixin",
    "WASmaxOutDirtyBitsCleanTypeWithTimestampMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.cleanType)
        return o("WASmaxOutDirtyBitsCleanTypeMixin").mergeCleanTypeMixin(
          e,
          t.cleanType,
        );
      if (t.cleanTypeWithTimestamp)
        return o(
          "WASmaxOutDirtyBitsCleanTypeWithTimestampMixin",
        ).mergeCleanTypeWithTimestampMixin(e, t.cleanTypeWithTimestamp);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeTypeCleanOrCleanWithTimestampMixinGroup = e;
  },
  98,
);
