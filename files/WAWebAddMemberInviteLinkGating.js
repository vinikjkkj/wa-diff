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
    function e(e, t) {
      var n;
      if (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t) !==
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      )
        return e;
      var r = t == null ? void 0 : t.parentGroup;
      return r == null
        ? null
        : (n = o("WAWebChatCollection").ChatCollection.get(r)) == null
          ? void 0
          : n.id;
    }
    function s(e) {
      return u(e == null ? void 0 : e.groupMetadata);
    }
    function u(e) {
      if (e == null || !d(e)) return null;
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_invite_options_in_add_members_variant",
      );
      return t === 1 || t === 2 ? t : null;
    }
    function c(e) {
      return s(e) != null;
    }
    function d(e) {
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
    ((l.getAddMemberInviteChatId = e),
      (l.getAddMemberInviteVariant = s),
      (l.getAddMemberInviteVariantFor = u),
      (l.shouldShowAddMemberInviteTiles = c));
  },
  98,
);
