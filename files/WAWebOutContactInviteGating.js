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
    ((l.isNativeSmsFallbackAvailable = s), (l.isOutContactInviteEnabled = u));
  },
  98,
);
