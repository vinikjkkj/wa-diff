__d(
  "WAWebEmailInviteGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_group_info",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_server_send_enabled",
      );
    }
    ((l.isEmailInviteEntryPointEnabled = e),
      (l.isEmailInviteServerSendEnabled = s));
  },
  98,
);
