__d(
  "WASmaxOutStatusPublishStatusEditOrRevokeMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutStatusPublishStatusEditMixin",
    "WASmaxOutStatusPublishStatusRevokeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isStatusEdit)
        return o("WASmaxOutStatusPublishStatusEditMixin").mergeStatusEditMixin(
          e,
        );
      if (t.isStatusRevoke)
        return o(
          "WASmaxOutStatusPublishStatusRevokeMixin",
        ).mergeStatusRevokeMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeStatusEditOrRevokeMixinGroup = e;
  },
  98,
);
