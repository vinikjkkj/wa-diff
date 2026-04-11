__d(
  "WASmaxOutGroupsMemberShareGroupHistoryModes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsAdminShareModeMixin",
    "WASmaxOutGroupsAllMembersShareModeMixin",
    "WASmaxOutGroupsUnknownShareModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isAdminShareMode)
        return o("WASmaxOutGroupsAdminShareModeMixin").mergeAdminShareModeMixin(
          e,
        );
      if (t.isAllMembersShareMode)
        return o(
          "WASmaxOutGroupsAllMembersShareModeMixin",
        ).mergeAllMembersShareModeMixin(e);
      if (t.unknownShareMode)
        return o(
          "WASmaxOutGroupsUnknownShareModeMixin",
        ).mergeUnknownShareModeMixin(e, t.unknownShareMode);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMemberShareGroupHistoryModes = e;
  },
  98,
);
