__d(
  "WAWebContextualBannerConfig",
  [
    "fbt",
    "$InternalEnum",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumBannerTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum")({
      Test_DONOTUSE: "test-do-not-use",
      AppLockUpsell: "app-lock-upsell",
      BackgroundSyncUpsell: "background-sync-upsell",
    });
    function u(t) {
      switch (t) {
        case e.Test_DONOTUSE:
          return {
            id: e.Test_DONOTUSE,
            endT: "2025-09-12",
            startT: "2024-08-12",
            dismissable: !0,
            title: "Dismissable contextual banner with icon and action",
            actionText: "Try now",
            showIcon: !0,
          };
        case e.AppLockUpsell: {
          var n =
            r("WAWebEnvironment").isWindows === !0
              ? r("WAWebFbtCommon")("WhatsApp for Windows")
              : r("WAWebFbtCommon")("WhatsApp Web");
          return {
            id: e.AppLockUpsell,
            endT: "2025-01-01",
            startT: "2024-09-09",
            dismissable: !0,
            title: s._(
              /*BTDS*/ "Use app lock to lock {app-name} with a password for more security.",
              [s._param("app-name", n)],
            ),
            actionText: s._(/*BTDS*/ "Try now"),
            showIcon: !0,
            syncEnabled: !0,
            metricField: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .APP_LOCK_UPSELL,
            condition: function () {
              return !o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
            },
          };
        }
        case e.BackgroundSyncUpsell:
          return {
            id: e.BackgroundSyncUpsell,
            endT: "2025-01-01",
            startT: "2024-09-09",
            dismissable: !0,
            title: s._(
              /*BTDS*/ "Use background sync to load faster when you open WhatsApp Web.",
            ),
            actionText: s._(/*BTDS*/ "Try now"),
            showIcon: !0,
            syncEnabled: !0,
            metricField: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .OFFLINE_NOTIFICATIONS_UPSELL,
            condition: function () {
              var e;
              return (
                o(
                  "WAWebPushNotificationsGatingUtils",
                ).canEnableOfflineNotifications() &&
                !o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalOfflineNotifications() &&
                ((e = window.Notification) == null ? void 0 : e.permission) !==
                  o("WAWebNotificationConstants").PERMISSION_DENIED
              );
            },
          };
      }
    }
    ((l.ContextualBannerId = e), (l.getContextualBannerConfig = u));
  },
  226,
);
