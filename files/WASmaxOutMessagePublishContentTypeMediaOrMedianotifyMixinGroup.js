__d(
  "WASmaxOutMessagePublishContentTypeMediaOrMedianotifyMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishContentTypeMedianotifyMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isContentTypeMedia)
        return o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(e);
      if (t.isContentTypeMedianotify)
        return o(
          "WASmaxOutMessagePublishContentTypeMedianotifyMixin",
        ).mergeContentTypeMedianotifyMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeContentTypeMediaOrMedianotifyMixinGroup = e;
  },
  98,
);
