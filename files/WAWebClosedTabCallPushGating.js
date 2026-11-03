__d(
  "WAWebClosedTabCallPushGating",
  [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebVoipChromiumDesktopBrowser",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (
        ((e = window.Notification) == null ? void 0 : e.permission) ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
        o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications() &&
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_calling_offline_call_notifications",
        )
      );
    }
    function s(e) {
      (o("WAWebMuteCollection").MuteCollection.on(
        "change:notificationsEnabled",
        e,
      ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", e));
    }
    function u() {
      return (
        o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser() &&
        !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() &&
        o("WAWebVoipGatingUtils").isCallingEnabled()
      );
    }
    ((l.shouldReceiveClosedTabCallPushes = e),
      (l.onClosedTabCallPushInputsChange = s));
  },
  98,
);
