__d(
  "WAWebEmailInviteGating",
  ["WAWebABProps", "WAWebGroupMemberLinkMode"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_group_info",
      );
    }
    function s(t) {
      return c(t) && e();
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_server_send_enabled",
      );
    }
    function c(e) {
      var t = e.iAmAdmin,
        n = e.iAmMember,
        r = e.isInviteLinkRestricted,
        a = e.isSupportGroup,
        i = e.memberLinkMode;
      return (
        !a &&
        !r &&
        (t ||
          (n &&
            i === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK))
      );
    }
    ((l.isEmailInviteEntryPointEnabled = e),
      (l.isInviteByEmailEnabled = s),
      (l.isEmailInviteServerSendEnabled = u));
  },
  98,
);
