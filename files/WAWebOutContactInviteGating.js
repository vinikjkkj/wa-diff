__d(
  "WAWebOutContactInviteGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebUA"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s() {
      return r("WAWebEnvironment").isWeb
        ? o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC &&
            o("WAWebABProps").getABPropConfigValue(
              "out_contact_invites_enabled",
            ) === e
        : !1;
    }
    l.isOutContactInviteEnabled = s;
  },
  98,
);
