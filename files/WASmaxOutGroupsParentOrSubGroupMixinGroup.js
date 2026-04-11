__d(
  "WASmaxOutGroupsParentOrSubGroupMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsParentGroupMixin",
    "WASmaxOutGroupsSubGroupMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.parentGroup)
        return o("WASmaxOutGroupsParentGroupMixin").mergeParentGroupMixin(
          e,
          t.parentGroup,
        );
      if (t.subGroup)
        return o("WASmaxOutGroupsSubGroupMixin").mergeSubGroupMixin(
          e,
          t.subGroup,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeParentOrSubGroupMixinGroup = e;
  },
  98,
);
