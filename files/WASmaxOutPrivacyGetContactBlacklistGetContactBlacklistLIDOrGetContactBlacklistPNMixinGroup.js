__d(
  "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistLIDMixin",
    "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistPNMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.getContactBlacklistGetContactBlacklistLID)
        return o(
          "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistLIDMixin",
        ).mergeGetContactBlacklistGetContactBlacklistLIDMixin(
          e,
          t.getContactBlacklistGetContactBlacklistLID,
        );
      if (t.getContactBlacklistGetContactBlacklistPN)
        return o(
          "WASmaxOutPrivacyGetContactBlacklistGetContactBlacklistPNMixin",
        ).mergeGetContactBlacklistGetContactBlacklistPNMixin(
          e,
          t.getContactBlacklistGetContactBlacklistPN,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeGetContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroup =
      e;
  },
  98,
);
