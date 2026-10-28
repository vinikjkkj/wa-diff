__d(
  "WAWebCreateCommunityGroupEligibility",
  [
    "WAWebABProps",
    "WAWebCommunityGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = o("WAWebABProps").getABPropConfigValue(
        "parent_group_min_participants_for_group_entry_point",
      );
      return !(
        !t ||
        r != null ||
        n < a ||
        o("WAWebGroupMetadataGetters").getGroupType(e) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        !o("WAWebCommunityGatingUtils").communitiesCreationEnabled() ||
        e.isSuspendedOrTerminated()
      );
    }
    l.default = e;
  },
  98,
);
