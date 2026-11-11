__d(
  "WAWebUserPrefsOfflineCallNotifications",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.OFFLINE_CALL_NOTIFICATIONS_ENABLED,
        ) !== !1
      );
    }
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.OFFLINE_CALL_NOTIFICATIONS_ENABLED,
        e,
      );
    }
    ((l.getOfflineCallNotificationsSetting = e),
      (l.saveOfflineCallNotificationsSetting = s));
  },
  98,
);
