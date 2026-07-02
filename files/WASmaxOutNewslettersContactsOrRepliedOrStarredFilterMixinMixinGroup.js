__d(
  "WASmaxOutNewslettersContactsOrRepliedOrStarredFilterMixinMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersContactsFilterMixinMixin",
    "WASmaxOutNewslettersRepliedFilterMixinMixin",
    "WASmaxOutNewslettersStarredFilterMixinMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isContactsFilterMixin)
        return o(
          "WASmaxOutNewslettersContactsFilterMixinMixin",
        ).mergeContactsFilterMixinMixin(e);
      if (t.isRepliedFilterMixin)
        return o(
          "WASmaxOutNewslettersRepliedFilterMixinMixin",
        ).mergeRepliedFilterMixinMixin(e);
      if (t.isStarredFilterMixin)
        return o(
          "WASmaxOutNewslettersStarredFilterMixinMixin",
        ).mergeStarredFilterMixinMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeContactsOrRepliedOrStarredFilterMixinMixinGroup = e;
  },
  98,
);
