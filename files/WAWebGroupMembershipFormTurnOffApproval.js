__d(
  "WAWebGroupMembershipFormTurnOffApproval",
  [
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMembershipFormActions",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        t !== !0 &&
        (e === o("WAWebGroupType").GroupType.DEFAULT ||
          e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) &&
        o(
          "WAWebGroupMembershipFormGating",
        ).isGroupMembershipFormSettingEnabled() &&
        o(
          "WAWebGroupMembershipFormActions",
        ).isGroupMembershipFormWriteAvailable()
      );
    }
    function s(e) {
      return (
        o(
          "WAWebGroupMembershipFormGating",
        ).isGroupMembershipFormSettingEnabled() &&
        o(
          "WAWebGroupMembershipFormActions",
        ).isGroupMembershipFormWriteAvailable() &&
        (o("WAWebGroupMembershipFormDevStore").isGMFDevMode()
          ? o("WAWebGroupMembershipFormDevStore").getDevMembershipFormRecord(
              o("WAWebWidFactory").asGroupWidOrThrow(e.id),
            ) != null
          : o("WAWebFrontendGroupMetadataGetters").getHasMembershipForm(e))
      );
    }
    ((l.isGroupMembershipFormEntryAvailable = e),
      (l.shouldDeleteGroupMembershipFormOnApprovalOff = s));
  },
  98,
);
