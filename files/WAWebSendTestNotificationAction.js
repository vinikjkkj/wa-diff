__d(
  "WAWebSendTestNotificationAction",
  [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebNotificationBackend",
    "WAWebNotificationConstants",
    "WAWebNotificationsOptInModalController",
    "WAWebPushNotificationsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (window.Notification != null) {
        if (
          window.Notification.permission ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED
        ) {
          o("WAWebNotificationBackend").showTestNotification();
          return;
        }
        var e = o("WAWebABProps").getABPropConfigValue(
            "web_notifications_banner_new_logic_enabled",
          ),
          t = window.Notification.permission,
          n = o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
            t,
            e,
          );
        if (t === o("WAWebNotificationConstants").PERMISSION_DENIED) {
          n &&
            o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(e);
          return;
        }
        var r = n
          ? o("WAWebNotificationsOptInModalController").openOwnedGuidePopup(e)
          : null;
        window.Notification.requestPermission(function (e) {
          (r == null || r({ close: !0 }),
            o("WAWebCmd").Cmd.onNotificationPermissionChange(),
            e === o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
              o("WAWebNotificationBackend").showTestNotification());
        });
      }
    }
    l.sendTestNotification = e;
  },
  98,
);
