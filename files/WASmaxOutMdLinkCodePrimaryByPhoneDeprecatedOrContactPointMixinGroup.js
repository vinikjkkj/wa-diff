__d(
  "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutMdLinkCodePrimaryByContactPointMixin",
    "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.linkCodePrimaryByPhoneDeprecated)
        return o(
          "WASmaxOutMdLinkCodePrimaryByPhoneDeprecatedMixin",
        ).mergeLinkCodePrimaryByPhoneDeprecatedMixin(
          e,
          t.linkCodePrimaryByPhoneDeprecated,
        );
      if (t.linkCodePrimaryByContactPoint)
        return o(
          "WASmaxOutMdLinkCodePrimaryByContactPointMixin",
        ).mergeLinkCodePrimaryByContactPointMixin(
          e,
          t.linkCodePrimaryByContactPoint,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeLinkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroup = e;
  },
  98,
);
