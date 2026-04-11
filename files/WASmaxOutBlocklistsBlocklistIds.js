__d(
  "WASmaxOutBlocklistsBlocklistIds",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutBlocklistsDisplayNameMixin",
    "WASmaxOutBlocklistsGuestNameAndDisplayNameMixin",
    "WASmaxOutBlocklistsGuestNameMixin",
    "WASmaxOutBlocklistsPnJidMixin",
    "WASmaxOutBlocklistsUnknownIdentifierMixin",
    "WASmaxOutBlocklistsUsernameMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.username)
        return o("WASmaxOutBlocklistsUsernameMixin").mergeUsernameMixin(
          e,
          t.username,
        );
      if (t.pnJid)
        return o("WASmaxOutBlocklistsPnJidMixin").mergePnJidMixin(e, t.pnJid);
      if (t.guestNameAndDisplayName)
        return o(
          "WASmaxOutBlocklistsGuestNameAndDisplayNameMixin",
        ).mergeGuestNameAndDisplayNameMixin(e, t.guestNameAndDisplayName);
      if (t.displayName)
        return o("WASmaxOutBlocklistsDisplayNameMixin").mergeDisplayNameMixin(
          e,
          t.displayName,
        );
      if (t.guestName)
        return o("WASmaxOutBlocklistsGuestNameMixin").mergeGuestNameMixin(
          e,
          t.guestName,
        );
      if (t.isUnknownIdentifier)
        return o(
          "WASmaxOutBlocklistsUnknownIdentifierMixin",
        ).mergeUnknownIdentifierMixin(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeBlocklistIds = e;
  },
  98,
);
