__d(
  "WAWebWindowsUserPrefsSystemTray",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = !0;
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsIsSystemTrayEnabled,
        e,
      );
    }
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsIsSystemTrayEnabled,
      );
      return t === !1 ? !1 : e;
    }
    ((l.setIsSystemTrayEnabled = s), (l.IsSystemTrayEnabled = u));
  },
  98,
);
