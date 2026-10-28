__d(
  "WAWebGroupInviteLinkEligibility",
  ["WAWebGroupMemberLinkMode"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasCallback,
        n = e.iAmAdmin,
        r = e.iAmMember,
        a = e.isInviteLinkRestricted,
        i = e.memberLinkMode,
        l = e.support;
      return (
        l !== !0 &&
        t &&
        !a &&
        (n ||
          (r &&
            i === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK))
      );
    }
    l.canShowGroupInviteLink = e;
  },
  98,
);
