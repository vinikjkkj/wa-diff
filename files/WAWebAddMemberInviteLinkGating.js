__d(
  "WAWebAddMemberInviteLinkGating",
  [
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupMetadata;
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t) !==
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      )
        return e;
      var n = t == null ? void 0 : t.parentGroup;
      return n == null ? null : o("WAWebChatCollection").ChatCollection.get(n);
    }
    function s(e) {
      var t = e == null ? void 0 : e.groupMetadata;
      if (t == null || !c(t)) return null;
      var n = o("WAWebABProps").getABPropConfigValue(
        "web_invite_options_in_add_members_variant",
      );
      return n === 1 || n === 2 ? n : null;
    }
    function u(e) {
      return s(e) != null;
    }
    function c(e) {
      if (
        e.support ||
        e.isSuspendedOrTerminated() ||
        o(
          "WAWebCommunitySubgroupInviteLinkRestriction",
        ).isSubgroupInviteLinkRestrictedByParentCommunity(e)
      )
        return !1;
      var t = e.participants;
      return (
        t.iAmAdmin() ||
        (t.iAmMember() &&
          e.memberLinkMode ===
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK)
      );
    }
    ((l.getAddMemberInviteChat = e),
      (l.getAddMemberInviteVariant = s),
      (l.shouldShowAddMemberInviteTiles = u));
  },
  98,
);
