__d(
  "WAWebAddMemberInviteLinkLogger",
  [
    "WAWebGroupInviteLinkClickWamEvent",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebWamEnumGroupInviteLinkEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      new (o("WAWebGroupInviteLinkClickWamEvent").GroupInviteLinkClickWamEvent)(
        {
          groupInviteLinkEntryPoint: o("WAWebWamEnumGroupInviteLinkEntryPoint")
            .GROUP_INVITE_LINK_ENTRY_POINT.COPY_LINK_ADD_MEMBER,
          groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(
            o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e),
          ),
          groupInviteLinkClickGroupId: o(
            "WAWebGroupJoinRequestMetricUtils",
          ).getSanitizedJid(e.id),
        },
      ).commit();
    }
    l.logAddMemberCopyLinkClick = e;
  },
  98,
);
