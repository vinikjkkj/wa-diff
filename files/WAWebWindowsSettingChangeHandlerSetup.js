__d(
  "WAWebWindowsSettingChangeHandlerSetup",
  [
    "WAWebUserPrefsSettingChangeHandler",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17160",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t,
        a =
          (e = n("cr:17219")) == null
            ? void 0
            : e.getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator")
                  .WAWebWindowsSettingChangeHandlerSetup,
              );
      if (a) {
        var i = a.getPreferences();
        i &&
          o("WAWebUserPrefsSettingChangeHandler").registerSettingChangeHandler(
            function (e, t) {
              i.handleSettingChange(e, t);
            },
          );
      }
      var l = (t = n("cr:17160")) != null ? t : {},
        s = l.WAWebWindowsGetBridge;
      if (s) {
        var u,
          c = (u = s()) == null ? void 0 : u.getPreferences();
        c &&
          o(
            "WAWebUserPrefsSettingChangeHandler",
          ).registerUserSettingChangeHandler(function (e, t) {
            c.handleSettingChange(e, t);
          });
      }
    }
    l.initializeWindowsSettingChangeHandlers = e;
  },
  98,
);
