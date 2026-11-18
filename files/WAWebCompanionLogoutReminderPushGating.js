__d(
  "WAWebCompanionLogoutReminderPushGating",
  [
    "WAWebCmd",
    "WAWebPermissionStatusWatcher",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsScreenLock",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !r("gkx")("10314") &&
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canEnableOfflineNotifications() &&
        o(
          "WAWebPushNotificationsGatingUtils",
        ).isNotificationPermissionGranted() &&
        !o("WAWebUserPrefsScreenLock").getScreenLockEnabled() &&
        r("justknobx")._("8360")
      );
    }
    function s(e) {
      (o("WAWebCmd").Cmd.on("on_notification_permission_change", e),
        o("WAWebPermissionStatusWatcher").subscribeToPermissionChange(
          "notifications",
          function () {
            return e();
          },
        ));
    }
    ((l.shouldReceiveCompanionLogoutReminderPushes = e),
      (l.onCompanionLogoutReminderPushInputsChange = s));
  },
  98,
);
