__d(
  "WAWebAddMemberInviteLinkLogger",
  [
    "WATimeUtils",
    "WAWebGroupInviteLinkClickWamEvent",
    "WAWebGroupInviteLinkPageVisitWamEvent",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebWamEnumGroupInviteLinkEntryPoint",
    "WAWebWamEnumInviteLinkEntryPointType",
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
    function s(e) {
      new (o(
        "WAWebGroupInviteLinkPageVisitWamEvent",
      ).GroupInviteLinkPageVisitWamEvent)({
        inviteLinkEntryPoint: o("WAWebWamEnumInviteLinkEntryPointType")
          .INVITE_LINK_ENTRY_POINT_TYPE.ADD_MEMBER,
        groupId: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(e.id),
        userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
      }).commit();
    }
    ((l.logAddMemberCopyLinkClick = e),
      (l.logAddMemberInviteOptionsOpened = s));
  },
  98,
);
