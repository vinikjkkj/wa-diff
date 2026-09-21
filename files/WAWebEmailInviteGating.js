__d(
  "WAWebEmailInviteGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_group_info",
      );
    }
    l.isEmailInviteEntryPointEnabled = e;
  },
  98,
);
