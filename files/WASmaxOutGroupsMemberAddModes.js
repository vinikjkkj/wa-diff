__d(
  "WASmaxOutGroupsMemberAddModes",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsAdminAddModeMixin",
    "WASmaxOutGroupsAllMembersAddModeMixin",
    "WASmaxOutGroupsUnknownAddModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.isAdminAddMode)
        return o("WASmaxOutGroupsAdminAddModeMixin").mergeAdminAddModeMixin(e);
      if (t.isAllMembersAddMode)
        return o(
          "WASmaxOutGroupsAllMembersAddModeMixin",
        ).mergeAllMembersAddModeMixin(e);
      if (t.unknownAddMode)
        return o("WASmaxOutGroupsUnknownAddModeMixin").mergeUnknownAddModeMixin(
          e,
          t.unknownAddMode,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeMemberAddModes = e;
  },
  98,
);
