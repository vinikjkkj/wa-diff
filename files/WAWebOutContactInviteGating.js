__d(
  "WAWebOutContactInviteGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 1;
    function u() {
      return r("WAWebEnvironment").isWeb
        ? o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
            o("WAWebABProps").getABPropConfigValue(
              "out_contact_invites_enabled",
            ) === e
        : !1;
    }
    function c() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "non_wa_contact_invite_cta_enabled",
        ) === s
      );
    }
    function d() {
      return r("WAWebEnvironment").isWeb
        ? o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
            o("WAWebABProps").getABPropConfigValue(
              "invite_deactivated_user_web",
            ) === !0
        : !1;
    }
    ((l.isOutContactInviteEnabled = u),
      (l.isContactEditInviteCtaEnabled = c),
      (l.isInviteDeactivatedUserWebEnabled = d));
  },
  98,
);
