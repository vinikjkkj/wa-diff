__d(
  "WAWebNotificationSettingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumInAppNotificationAlertStyle",
    "WAWebWamEnumNotificationSoundTone",
    "WAWebWamEnumUnreadBadgeSettingType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NotificationSetting: [
            3684,
            {
              groupReactionNotification: [1, e.TYPES.BOOLEAN],
              groupShowNotification: [2, e.TYPES.BOOLEAN],
              groupSoundTone: [
                3,
                o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE,
              ],
              inAppNotificationAlertStyle: [
                4,
                o("WAWebWamEnumInAppNotificationAlertStyle")
                  .IN_APP_NOTIFICATION_ALERT_STYLE,
              ],
              inAppNotificationSound: [5, e.TYPES.BOOLEAN],
              inAppNotificationVibrate: [6, e.TYPES.BOOLEAN],
              messageReactionNotification: [7, e.TYPES.BOOLEAN],
              messageShowNotification: [8, e.TYPES.BOOLEAN],
              messageSoundTone: [
                9,
                o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE,
              ],
              offlineNotification: [11, e.TYPES.BOOLEAN],
              recommendedChannelsNotificationSetting: [19, e.TYPES.BOOLEAN],
              showPreview: [10, e.TYPES.BOOLEAN],
              statusNotificationPriority: [14, e.TYPES.BOOLEAN],
              statusNotificationVibration: [15, e.TYPES.BOOLEAN],
              statusReactionNotification: [16, e.TYPES.BOOLEAN],
              statusReminderNotification: [12, e.TYPES.BOOLEAN],
              statusShowNotification: [18, e.TYPES.BOOLEAN],
              statusSoundTone: [
                17,
                o("WAWebWamEnumNotificationSoundTone").NOTIFICATION_SOUND_TONE,
              ],
              unreadBadgeSetting: [
                13,
                o("WAWebWamEnumUnreadBadgeSettingType")
                  .UNREAD_BADGE_SETTING_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NotificationSetting: [] },
      );
    l.NotificationSettingWamEvent = s;
  },
  98,
);
