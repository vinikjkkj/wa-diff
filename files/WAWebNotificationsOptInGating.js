__d(
  "WAWebNotificationsOptInGating",
  [
    "WATimeUtils",
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebNotificationsModalVariant",
    "WAWebNux",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsNuxPreferences",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2 * o("WATimeUtils").WEEK_SECONDS;
    function s(e) {
      return !(
        r("WAWebEnvironment").isWindows ||
        window.Notification == null ||
        e !== o("WAWebNotificationConstants").PERMISSION_DEFAULT ||
        !d()
      );
    }
    function u(e) {
      return (
        s(e) &&
        o("WAWebNotificationsModalVariant").isNotificationsOptInModalVariant()
      );
    }
    function c() {
      if (
        !o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.NOTIFICATIONS_OPT_IN,
        )
      )
        return !1;
      var t = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus(),
        n = t.lastModalShownTime;
      return n == null || o("WATimeUtils").unixTime() - n > e;
    }
    function d(e) {
      if ((e === void 0 && (e = !1), r("WAWebEnvironment").isWindows && !e))
        return !1;
      var t = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus(),
        n = t.isDismissed,
        a = t.lastDismissTime;
      return n
        ? a == null ||
            o("WATimeUtils").unixTime() - a > 2 * o("WATimeUtils").WEEK_SECONDS
        : !0;
    }
    ((l.isNotificationsOptInEligible = s),
      (l.shouldShowNotificationsOptInModal = u),
      (l.shouldShowOptInModalNow = c),
      (l.shouldShowNotificationSettingsV2Butterbar = d));
  },
  98,
);
