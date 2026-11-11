__d(
  "WAWebClosedTabCallPushGating",
  [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationHelpers",
    "WAWebPermissionStatusWatcher",
    "WAWebUserPrefsOfflineCallNotifications",
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
        o("WAWebNotificationHelpers").shouldEnableNotificationGranular() &&
        o(
          "WAWebUserPrefsOfflineCallNotifications",
        ).getOfflineCallNotificationsSetting() &&
        s()
      );
    }
    function s() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_calling_offline_call_notifications",
        )
      );
    }
    function u(e) {
      (o("WAWebMuteCollection").MuteCollection.on(
        "change:notificationsEnabled",
        e,
      ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", e),
        o("WAWebCmd").Cmd.on("on_notification_permission_change", e),
        o("WAWebPermissionStatusWatcher").subscribeToPermissionChange(
          "notifications",
          function () {
            return e();
          },
        ));
    }
    function c() {
      return (
        o("WAWebVoipChromiumDesktopBrowser").isChromiumDesktopBrowser() &&
        !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() &&
        o("WAWebVoipGatingUtils").isCallingEnabled()
      );
    }
    ((l.shouldReceiveClosedTabCallPushes = e),
      (l.isClosedTabCallPushAvailable = s),
      (l.onClosedTabCallPushInputsChange = u));
  },
  98,
);
