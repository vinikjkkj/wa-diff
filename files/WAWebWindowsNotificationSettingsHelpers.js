__d(
  "WAWebWindowsNotificationSettingsHelpers",
  [
    "WAWebABProps",
    "WAWebSettingsConst",
    "WAWebWamEnumSettingsItemType",
    "WAWebWindowsNotificationStrings",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        step: o("WAWebSettingsConst").SettingsSteps.ShowNotificationBanner,
        id: "show_notification_banner",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebWindowsNotificationStrings").showNotificationBannerTitle(),
        ).toLowerCase(),
        title: o("WAWebWindowsNotificationStrings").showNotificationBannerTitle,
        testid: "li-show-notification-banner",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
          .NOTIFICATIONS,
      },
      s = function () {
        return o("WAWebABProps").getABPropConfigValue(
          "custom_notification_tones",
        );
      };
    ((l.ShowNotificationBannerSettingsItem = e),
      (l.isCustomNotificationTonesEnabled = s));
  },
  98,
);
