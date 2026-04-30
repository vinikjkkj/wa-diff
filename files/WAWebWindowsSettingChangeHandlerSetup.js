__d(
  "WAWebWindowsSettingChangeHandlerSetup",
  ["WAWebUserPrefsSettingChangeHandler", "cr:17160", "cr:17219"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t,
        r = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge();
      if (r) {
        var a = r.getPreferences();
        a &&
          o("WAWebUserPrefsSettingChangeHandler").registerSettingChangeHandler(
            function (e, t) {
              a.handleSettingChange(e, t);
            },
          );
      }
      var i = (t = n("cr:17160")) != null ? t : {},
        l = i.WAWebWindowsGetBridge;
      if (l) {
        var s,
          u = (s = l()) == null ? void 0 : s.getPreferences();
        u &&
          o(
            "WAWebUserPrefsSettingChangeHandler",
          ).registerUserSettingChangeHandler(function (e, t) {
            u.handleSettingChange(e, t);
          });
      }
    }
    l.initializeWindowsSettingChangeHandlers = e;
  },
  98,
);
