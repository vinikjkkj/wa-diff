__d(
  "WAWebEmailInviteGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = ["canSendEmailInvites"];
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_group_info",
      );
    }
    function u(t) {
      var n = t.canSendEmailInvites,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return m(r) && s() && (!c() || n);
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_email_invites_server_send_enabled",
      );
    }
    function d(e, t) {
      var n;
      ((n = e.groupMetadata) == null ? void 0 : n.participants.iAmAdmin()) ===
        !0 && t();
    }
    function m(e) {
      var t = e.iAmAdmin,
        n = e.isInviteLinkRestricted,
        r = e.isSupportGroup;
      return t && !r && !n;
    }
    ((l.isEmailInviteEntryPointEnabled = s),
      (l.isInviteByEmailEnabled = u),
      (l.isEmailInviteServerSendEnabled = c),
      (l.runIfGroupEmailInviteAdmin = d),
      (l.hasGroupEmailInvitePermission = m));
  },
  98,
);
