__d(
  "WAWebOutContactInviteGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s() {
      return (
        r("WAWebEnvironment").isWeb &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "out_contact_invites_enabled",
        ) === e
      );
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "invite_deactivated_user_web",
        ) === !0
      );
    }
    ((l.isNativeSmsFallbackAvailable = s),
      (l.isOutContactInviteEnabled = u),
      (l.isInviteDeactivatedUserWebEnabled = c));
  },
  98,
);
