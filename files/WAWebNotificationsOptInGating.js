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
        !d(!0)
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
    function d(e, t) {
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
    ((l.isNotificationsOptInEligible = s),
      (l.shouldShowNotificationsOptInModal = u),
      (l.shouldShowOptInModalNow = c),
      (l.shouldShowNotificationSettingsV2Butterbar = d));
  },
  98,
);
