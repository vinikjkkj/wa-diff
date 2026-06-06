__d(
  "WAWebHasAvatar",
  [
    "WAWebHasAvatarDeviceCapability",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = s();
      if (e != null) return e;
      var t = await o(
        "WAWebHasAvatarDeviceCapability",
      ).getPrimaryHasAvatarFromDeviceCapability();
      return (u(t), t);
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getTS(
        o("WAWebUserPrefsKeys").UserPrefs.UserHasAvatar,
      );
      return typeof e == "boolean" ? e : null;
    }
    function u(e) {
      r("WAWebUserPrefsStore").setTS(
        o("WAWebUserPrefsKeys").UserPrefs.UserHasAvatar,
        e,
      );
    }
    ((l.getUserHasAvatar = e), (l.saveHasAvatarOnTempStorage = u));
  },
  98,
);
