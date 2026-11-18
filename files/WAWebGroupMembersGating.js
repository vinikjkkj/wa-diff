__d(
  "WAWebGroupMembersGating",
  [
    "WAWebABProps",
    "WAWebGroupMetadataGetters",
    "WAWebWamEnumGroupJoinRequestEntrypointType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupMetadata;
      return (
        t != null &&
        s({
          isReadOnly: e.isReadOnly,
          isParentGroup: t.isParentGroup,
          isCag: o("WAWebGroupMetadataGetters").getIsCag(t),
          support: t.support,
          suspended: t.suspended,
          terminated: t.terminated,
          iAmMember: t.participants.iAmMember(),
          iAmAdmin: t.participants.iAmAdmin(),
        })
      );
    }
    function s(e) {
      return (
        !e.isReadOnly &&
        e.isParentGroup !== !0 &&
        !e.isCag &&
        !e.support &&
        !e.suspended &&
        !e.terminated &&
        e.iAmMember &&
        e.iAmAdmin &&
        o("WAWebABProps").getABPropConfigValue("web_group_members_view_enabled")
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_group_member_list_logging_enabled",
      )
        ? o("WAWebWamEnumGroupJoinRequestEntrypointType")
            .GROUP_JOIN_REQUEST_ENTRYPOINT_TYPE.MANAGE_MEMBERS
        : null;
    }
    ((l.isGroupMembersViewEnabled = e),
      (l.isGroupMembersViewAllowed = s),
      (l.getManageMembersJoinRequestEntrypoint = u));
  },
  98,
);
