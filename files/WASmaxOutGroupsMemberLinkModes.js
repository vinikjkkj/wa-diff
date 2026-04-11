__d(
  "WASmaxOutGroupsMemberLinkModes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsAdminLinkModeMixin",
    "WASmaxOutGroupsAllMembersLinkModeMixin",
    "WASmaxOutGroupsUnknownLinkModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isAdminLinkMode)
        return o("WASmaxOutGroupsAdminLinkModeMixin").mergeAdminLinkModeMixin(
          e,
        );
      if (t.isAllMembersLinkMode)
        return o(
          "WASmaxOutGroupsAllMembersLinkModeMixin",
        ).mergeAllMembersLinkModeMixin(e);
      if (t.unknownLinkMode)
        return o(
          "WASmaxOutGroupsUnknownLinkModeMixin",
        ).mergeUnknownLinkModeMixin(e, t.unknownLinkMode);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMemberLinkModes = e;
  },
  98,
);
