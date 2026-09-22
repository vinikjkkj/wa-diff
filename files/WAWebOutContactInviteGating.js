__d(
  "WAWebOutContactInviteGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 1;
    function u() {
      return (
        r("WAWebEnvironment").isWeb &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function c() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "out_contact_invites_enabled",
        ) === e
      );
    }
    function d() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "non_wa_contact_invite_cta_enabled",
        ) === s
      );
    }
    ((l.isNativeSmsFallbackAvailable = u),
      (l.isOutContactInviteEnabled = c),
      (l.isContactEditInviteCtaEnabled = d));
  },
  98,
);
