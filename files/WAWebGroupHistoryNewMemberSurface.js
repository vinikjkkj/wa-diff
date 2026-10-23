__d(
  "WAWebGroupHistoryNewMemberSurface",
  [
    "$InternalEnum",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "MembershipApprovalRequests",
      "MentionPicker",
      "ContactCard",
    ]);
    function s(t) {
      return t === e.MembershipApprovalRequests
        ? {
            groupAddMemberEntryPoint: o("WAWebWamEnumAddMembersEntrypointType")
              .ADD_MEMBERS_ENTRYPOINT_TYPE.MEMBERSHIP_APPROVAL_REQUESTS,
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .MEMBERSHIP_APPROVAL_REQUESTS,
          }
        : t === e.MentionPicker
          ? {
              groupAddMemberEntryPoint: o(
                "WAWebWamEnumAddMembersEntrypointType",
              ).ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_MENTION_PICKER,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .GROUP_MEMBER_ADD_EXISTING_GROUP,
            }
          : t === e.ContactCard
            ? {
                groupAddMemberEntryPoint: o(
                  "WAWebWamEnumAddMembersEntrypointType",
                ).ADD_MEMBERS_ENTRYPOINT_TYPE
                  .GROUP_ADD_MEMBER_FROM_SHARED_CONTACT,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .GROUP_MEMBER_ADD_EXISTING_GROUP,
              }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    ((l.GroupHistoryNewMemberSurface = e),
      (l.getGroupHistoryNewMemberLogging = s));
  },
  98,
);
