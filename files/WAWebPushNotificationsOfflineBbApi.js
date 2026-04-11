__d(
  "WAWebPushNotificationsOfflineBbApi",
  ["WAWebPushNotificationsGatingUtils", "WAWebUserPrefsNotifications"],
  function (t, n, r, o, a, i, l) {
    var e = 1e4,
      s = !0,
      u = null;
    function c() {
      o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications() &&
        ((s = !1), (u = self.performance.now()));
    }
    function d() {
      o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications() &&
        !s &&
        u != null &&
        self.performance.now() - u > e &&
        o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
          isLongResumeTime: !0,
        });
    }
    ((l.setStartCommsT = c), (l.setMainStreamModeReadyT = d));
  },
  98,
);
