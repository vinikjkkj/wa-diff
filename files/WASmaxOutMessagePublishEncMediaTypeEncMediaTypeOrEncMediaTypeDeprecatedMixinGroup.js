__d(
  "WASmaxOutMessagePublishEncMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
    "WASmaxOutMessagePublishEncMediaTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.encMediaType)
        return o(
          "WASmaxOutMessagePublishEncMediaTypeMixin",
        ).mergeEncMediaTypeMixin(e, t.encMediaType);
      if (t.encMediaTypeDeprecated)
        return o(
          "WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
        ).mergeEncMediaTypeDeprecatedMixin(e, t.encMediaTypeDeprecated);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncMediaTypeEncMediaTypeOrEncMediaTypeDeprecatedMixinGroup = e;
  },
  98,
);
