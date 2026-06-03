__d(
  "WAWebSettingsSyncBridge",
  [
    "WALogger",
    "WAWebSettingsChangeWamEvent",
    "WAWebSettingsSync",
    "WAWebWamEnumSettingType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        startAtLogin: (s = o("WAWebWamEnumSettingType")).SETTING_TYPE
          .HYBRID_START_UP,
        minimizeToTray: s.SETTING_TYPE.HYBRID_SYSTEM_TRAY,
        language: s.SETTING_TYPE.LANGUAGE,
        replaceTextWithEmoji: s.SETTING_TYPE.REPLACE_TEXT_WITH_EMOJI,
        bannerNotificationDisplayMode:
          s.SETTING_TYPE.BANNER_NOTIFICATION_DISPLAY_MODE,
        unreadCounterBadgeDisplayMode:
          s.SETTING_TYPE.UNREAD_COUNTER_BADGE_DISPLAY_MODE,
        isMessagesNotificationEnabled:
          s.SETTING_TYPE.IS_MESSAGES_NOTIFICATION_ENABLED,
        isCallsNotificationEnabled:
          s.SETTING_TYPE.IS_CALLS_NOTIFICATION_ENABLED,
        isReactionsNotificationEnabled:
          s.SETTING_TYPE.IS_REACTIONS_NOTIFICATION_ENABLED,
        isStatusReactionsNotificationEnabled:
          s.SETTING_TYPE.IS_STATUS_REACTIONS_NOTIFICATION_ENABLED,
        isTextPreviewForNotificationEnabled:
          s.SETTING_TYPE.IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED,
        defaultNotificationToneId: s.SETTING_TYPE.DEFAULT_NOTIFICATION_TONE_ID,
        groupDefaultNotificationToneId:
          s.SETTING_TYPE.GROUP_DEFAULT_NOTIFICATION_TONE_ID,
        appTheme: s.SETTING_TYPE.APP_THEME,
        wallpaperId: s.SETTING_TYPE.WALLPAPER_ID,
        chatThemeId: s.SETTING_TYPE.CHAT_THEME_ID,
        colorSchemeId: s.SETTING_TYPE.COLOR_SCHEME_ID,
        isDoodleWallpaperEnabled: s.SETTING_TYPE.IS_DOODLE_WALLPAPER_ENABLED,
        fontSize: s.SETTING_TYPE.FONT_SIZE,
        isPhotosAutodownloadEnabled:
          s.SETTING_TYPE.IS_PHOTOS_AUTODOWNLOAD_ENABLED,
        isAudiosAutodownloadEnabled:
          s.SETTING_TYPE.IS_AUDIOS_AUTODOWNLOAD_ENABLED,
        isVideosAutodownloadEnabled:
          s.SETTING_TYPE.IS_VIDEOS_AUTODOWNLOAD_ENABLED,
        isDocumentsAutodownloadEnabled:
          s.SETTING_TYPE.IS_DOCUMENTS_AUTODOWNLOAD_ENABLED,
        disableLinkPreviews: s.SETTING_TYPE.DISABLE_LINK_PREVIEWS,
        notificationToneId: s.SETTING_TYPE.NOTIFICATION_TONE_ID,
        mediaUploadQuality: s.SETTING_TYPE.MEDIA_UPLOAD_QUALITY,
        isSpellCheckEnabled: s.SETTING_TYPE.IS_SPELL_CHECK_ENABLED,
        isEnterToSendEnabled: s.SETTING_TYPE.IS_ENTER_TO_SEND_ENABLED,
        isGroupMessageNotificationEnabled:
          s.SETTING_TYPE.IS_GROUP_MESSAGE_NOTIFICATION_ENABLED,
        isGroupReactionsNotificationEnabled:
          s.SETTING_TYPE.IS_GROUP_REACTIONS_NOTIFICATION_ENABLED,
        isStatusNotificationEnabled:
          s.SETTING_TYPE.IS_STATUS_NOTIFICATION_ENABLED,
        statusNotificationToneId: s.SETTING_TYPE.STATUS_NOTIFICATION_TONE_ID,
        shouldPlaySoundForCallNotification:
          s.SETTING_TYPE.SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION,
      };
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          (a === void 0 && (a = "app"),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[settings-sync] Bridge: Sending mutation for ",
                  "",
                ])),
              t,
            ));
          var i = u[t];
          (i != null &&
            new (o("WAWebSettingsChangeWamEvent").SettingsChangeWamEvent)({
              currentSettingValue: String(n),
              settingType: i,
            }).commit(),
            yield r("WAWebSettingsSync").sendMutation(t, n, a));
        })),
        d.apply(this, arguments)
      );
    }
    l.sendSettingChange = c;
  },
  98,
);
