__d(
  "WAWebGroupFromGroupEligibility",
  [
    "WAWebABProps",
    "WAWebCanUseGroupFromGroup",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      return !(
        !t ||
        o("WAWebGroupMetadataGetters").getGroupType(e) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        o("WAWebGroupMetadataGetters").getGroupType(e) ===
          o("WAWebGroupType").GroupType.COMMUNITY ||
        e.isSuspendedOrTerminated() ||
        !r("WAWebCanUseGroupFromGroup")(a, n) ||
        !o("WAWebABProps").getABPropConfigValue("group_from_group")
      );
    }
    l.default = e;
  },
  98,
);
