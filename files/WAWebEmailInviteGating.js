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
      var n = t.iAmAdmin,
        r = t.iAmMember,
        a = t.isInviteLinkRestricted,
        i = t.isSupportGroup,
        l = t.memberLinkMode;
      return (
        !i &&
        !a &&
        (n ||
          (r &&
            l ===
              o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK)) &&
        e()
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_server_send_enabled",
      );
    }
    ((l.isEmailInviteEntryPointEnabled = e),
      (l.isInviteByEmailEnabled = s),
      (l.isEmailInviteServerSendEnabled = u));
  },
  98,
);
