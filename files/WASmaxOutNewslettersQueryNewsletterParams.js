__d(
  "WASmaxOutNewslettersQueryNewsletterParams",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutNewslettersQueryNewsletterInviteParamsMixin",
    "WASmaxOutNewslettersQueryNewsletterJIDParamsMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.queryNewsletterJIDParams)
        return o(
          "WASmaxOutNewslettersQueryNewsletterJIDParamsMixin",
        ).mergeQueryNewsletterJIDParamsMixin(e, t.queryNewsletterJIDParams);
      if (t.queryNewsletterInviteParams)
        return o(
          "WASmaxOutNewslettersQueryNewsletterInviteParamsMixin",
        ).mergeQueryNewsletterInviteParamsMixin(
          e,
          t.queryNewsletterInviteParams,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeQueryNewsletterParams = e;
  },
  98,
);
