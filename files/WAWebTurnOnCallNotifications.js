__d(
  "WAWebTurnOnCallNotifications",
  [
    "WAWebABProps",
    "WAWebCmd",
    "WAWebNotificationConstants",
    "WAWebNotificationPermission",
    "WAWebNotificationsOptInModalController",
    "WAWebSettingsConst",
    "WAWebVoipCallsTabNotificationsOffBannerGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = function () {
        e(
          o(
            "WAWebVoipCallsTabNotificationsOffBannerGating",
          ).isGlobalNotificationsOff()
            ? o("WAWebSettingsConst").SettingsSteps.Notifications
            : o("WAWebSettingsConst").SettingsSteps.Calls,
        );
      };
      if (o("WAWebNotificationPermission").isNotificationPermissionGranted()) {
        t();
        return;
      }
      o(
        "WAWebNotificationsOptInModalController",
      ).requestNotificationsPermission(
        o("WAWebABProps").getABPropConfigValue(
          "web_notifications_banner_new_logic_enabled",
        ),
        {
          enableInAppSettingsOnGrant: !1,
          onPermissionResult: function (n) {
            (o("WAWebCmd").Cmd.onNotificationPermissionChange(),
              n === o("WAWebNotificationConstants").PERMISSION_ALLOWED &&
                o(
                  "WAWebVoipCallsTabNotificationsOffBannerGating",
                ).areCallNotificationsOff() &&
                t());
          },
        },
      );
    }
    l.turnOnCallNotifications = e;
  },
  98,
);
