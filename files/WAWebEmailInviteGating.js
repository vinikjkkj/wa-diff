__d(
  "WAWebEmailInviteGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_group_info",
      );
    }
    function s(t) {
      return d(t) && e();
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_server_send_enabled",
      );
    }
    function c(e, t) {
      var n;
      ((n = e.groupMetadata) == null ? void 0 : n.participants.iAmAdmin()) ===
        !0 && t();
    }
    function d(e) {
      var t = e.iAmAdmin,
        n = e.isInviteLinkRestricted,
        r = e.isSupportGroup;
      return t && !r && !n;
    }
    ((l.isEmailInviteEntryPointEnabled = e),
      (l.isInviteByEmailEnabled = s),
      (l.isEmailInviteServerSendEnabled = u),
      (l.runIfGroupEmailInviteAdmin = c));
  },
  98,
);
