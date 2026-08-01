__d(
  "WAWebWindowsTaskbarNotificationSettingsHelpers",
  ["fbt", "WAWebSettingsConst", "WAWebWamEnumSettingsItemType"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Show taskbar notification badge");
    }
    var u = {
      step: o("WAWebSettingsConst").SettingsSteps.TaskbarNotificationSettings,
      id: "taskbar_notification_settings",
      isAvailable: !0,
      searchCriteria: String(e()).toLowerCase(),
      title: e,
      testid: "li-taskbar-notification-settings",
      wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
        .NOTIFICATIONS,
    };
    ((l.taskbarNotificationSettingsTitle = e),
      (l.TaskbarNotificationSettingsItem = u));
  },
  226,
);
