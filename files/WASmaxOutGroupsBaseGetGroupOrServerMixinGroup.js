__d(
  "WASmaxOutGroupsBaseGetGroupOrServerMixinGroup",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxOutGroupsBaseGetServerMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.baseGetGroup)
        return o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
          e,
          t.baseGetGroup,
        );
      if (t.isBaseGetServer)
        return o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(
          e,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeBaseGetGroupOrServerMixinGroup = e;
  },
  98,
);
