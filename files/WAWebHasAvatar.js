__d(
  "WAWebHasAvatar",
  [
    "WAWebHasAvatarDeviceCapability",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = u();
          if (e != null) return e;
          var t = yield o(
            "WAWebHasAvatarDeviceCapability",
          ).getPrimaryHasAvatarFromDeviceCapability();
          return (c(t), t);
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      var e = r("WAWebUserPrefsStore").getTS(
        o("WAWebUserPrefsKeys").UserPrefs.UserHasAvatar,
      );
      return typeof e == "boolean" ? e : null;
    }
    function c(e) {
      r("WAWebUserPrefsStore").setTS(
        o("WAWebUserPrefsKeys").UserPrefs.UserHasAvatar,
        e,
      );
    }
    ((l.getUserHasAvatar = e), (l.saveHasAvatarOnTempStorage = c));
  },
  98,
);
