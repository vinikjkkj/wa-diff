__d(
  "WAWebVoipCallsTabNotificationsOffBannerGating",
  [
    "WAWebABProps",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebNotificationPermission",
    "WAWebNux",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsNuxPreferences",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !o("WAWebNotificationHelpers").shouldEnableNotificationGranular() ||
        !o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications()
      );
    }
    function s() {
      return (
        o("WAWebNotificationPermission").isNotificationPermissionGranted() &&
        !o("WAWebNotificationHelpers").shouldEnableNotificationGranular()
      );
    }
    function u() {
      return !e() ||
        (!o("WAWebNotificationPermission").isNotificationPermissionGranted() &&
          !c()) ||
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_calls_tab_notifications_off_banner_enabled",
        )
        ? !1
        : o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
            o("WAWebNux").NUX.CALLS_TAB_NOTIFICATIONS_OFF_BANNER,
          );
    }
    function c() {
      var e;
      return o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(
        (e = window.Notification) == null ? void 0 : e.permission,
        o("WAWebABProps").getABPropConfigValue(
          "web_notifications_banner_new_logic_enabled",
        ),
      );
    }
    ((l.areCallNotificationsOff = e),
      (l.isGlobalNotificationsOff = s),
      (l.shouldShowCallsTabNotificationsOffBanner = u));
  },
  98,
);
