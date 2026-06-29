__d(
  "WAWebNotificationsOptInGating",
  [
    "WATimeUtils",
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebNotificationsModalVariant",
    "WAWebUserPrefsNotifications",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !(
        r("WAWebEnvironment").isWindows ||
        window.Notification == null ||
        e !== o("WAWebNotificationConstants").PERMISSION_DEFAULT ||
        !u(!0)
      );
    }
    function s(t) {
      return (
        e(t) &&
        o("WAWebNotificationsModalVariant").isNotificationsOptInModalVariant()
      );
    }
    function u(e, t) {
      if ((t === void 0 && (t = !1), r("WAWebEnvironment").isWindows && !t))
        return !1;
      var n = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus(),
        a = n.firstSeenTime,
        i = n.isDismissed,
        l = n.lastDismissTime;
      if (e) {
        if (i)
          return (
            l == null ||
            o("WATimeUtils").unixTime() - l > 2 * o("WATimeUtils").WEEK_SECONDS
          );
      } else if (a == null)
        o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
          isDismissed: !1,
          firstSeenTime: o("WATimeUtils").unixTime(),
        });
      else if (
        i ||
        o("WATimeUtils").unixTime() - a > 4 * o("WATimeUtils").WEEK_SECONDS
      )
        return !1;
      return !0;
    }
    ((l.isNotificationsOptInEligible = e),
      (l.shouldShowNotificationsOptInModal = s),
      (l.shouldShowNotificationSettingsV2Butterbar = u));
  },
  98,
);
