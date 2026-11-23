__d(
  "WASmaxOutMessagePublishEncMediaTypeOrListMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishEncListMixin",
    "WASmaxOutMessagePublishEncMediaTypeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.encMediaType)
        return o(
          "WASmaxOutMessagePublishEncMediaTypeMixin",
        ).mergeEncMediaTypeMixin(e, t.encMediaType);
      if (t.isEncList)
        return o("WASmaxOutMessagePublishEncListMixin").mergeEncListMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeEncMediaTypeOrListMixinGroup = e;
  },
  98,
);
