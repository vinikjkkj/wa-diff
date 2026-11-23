__d(
  "WAWebWindowsVsrPrefs",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsIsVsrEnabled,
        e,
      );
    }
    function u() {
      var t = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsIsVsrEnabled,
      );
      return t === !0 ? !0 : e;
    }
    ((l.setIsVsrEnabled = s), (l.getIsVsrEnabled = u));
  },
  98,
);
