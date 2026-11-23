__d(
  "WAWebWindowsHybridUserPrefsMigrationControlHelper",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeValue",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebMuteCollection",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WAWebWallpaper",
    "WAWebWidFactory",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsScalingControl.react",
    "WAWebWindowsScalingControlConstants",
    "WAWebWindowsShowNotificationBannerOption",
    "WAWebWindowsTaskbarNotificationOption",
    "WAWebWindowsUserPrefsNotifications",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({ SystemDefault: 0, Light: 1, Dark: 2 });
    function u(t, n) {
      var a,
        i,
        l = r("WAWebChatPreferenceCollection").getDefault();
      (l.set("transformTextEmoji", t.replaceTextWithEmoji),
        o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications(
          t.isSecurityNotificationsEnabled,
        ),
        o("WAWebWindowsUserPrefsNotifications").setNotificationBannerSetting(
          c(t.bannerNotificationDisplayMode),
        ),
        o("WAWebWindowsUserPrefsNotifications").setTaskbarNotificationSetting(
          d(t.unreadCounterBadgeDisplayMode),
        ),
        o("WAWebMuteCollection").MuteCollection.setGlobalNotifications(
          t.isMessagesNotificationEnabled,
        ),
        o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(
          t.isCallsNotificationEnabled,
        ),
        t.isReactionsNotificationEnabled ||
          o("WAWebMuteCollection")
            .MuteCollection.globalReactionsMute()
            .mute({ expiration: -1 }),
        o("WAWebWindowsUserPrefsNotifications").setStatusReactionsSetting(
          t.isStatusReactionsNotificationEnabled,
        ),
        o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(
          t.isTextPreviewForNotificationEnabled,
        ),
        o("WAWebWindowsUserPrefsNotifications").setNotificationToneSetting(
          (a = o(
            "WAWebWindowsNotificationToneOption",
          ).NotificationToneOption.cast(t.defaultNotificationTone)) != null
            ? a
            : o("WAWebWindowsNotificationToneOption").NotificationToneOption
                .Default,
        ),
        o("WAWebWindowsUserPrefsNotifications").setNotificationToneGroupSetting(
          (i = o(
            "WAWebWindowsNotificationToneOption",
          ).NotificationToneOption.cast(t.groupDefaultNotificationTone)) != null
            ? i
            : o("WAWebWindowsNotificationToneOption").NotificationToneOption
                .Default,
        ));
      var u = n.theme,
        m = s.cast(t.appTheme);
      m != null &&
        m !== s.SystemDefault &&
        (n.setSystemThemeMode(!1),
        (u = m === s.Dark ? "dark" : "light"),
        n.setTheme(u));
      var p = t.wallpaperId;
      if (p !== -1) {
        var _;
        l.set(
          "wallpaperValue",
          o("WAWebChatThemeValue").wallpaperValueFromFlat({
            wallpaper:
              (_ = o("WAWebWallpaper").getWallpaperColors(u).at(p)) != null
                ? _
                : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: t.isDoodleEnabled,
            stockWallpaperImageId: null,
          }),
        );
      } else
        l.set(
          "wallpaperValue",
          o("WAWebChatThemeValue").wallpaperValueWithDoodle(
            l.wallpaperValue,
            t.isDoodleEnabled,
          ),
        );
      var f = o("WAWebWindowsScalingControlConstants").AllowedZoomLevel.cast(
        t.fontSize / 100,
      );
      (f &&
        o(
          "WAWebWindowsScalingControl.react",
        ).WAWebScalingControlManager.setZoomLevel(f),
        o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(
          t.isPhotosAutodownloadEnabled,
        ),
        o("WAWebUserPrefsGeneral").setAutoDownloadAudio(
          t.isAudiosAutodownloadEnabled,
        ),
        o("WAWebUserPrefsGeneral").setAutoDownloadVideos(
          t.isVideosAutodownloadEnabled,
        ),
        o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(
          t.isDocumentsAutodownloadEnabled,
        ),
        t.customTones.forEach(function (t) {
          try {
            var n,
              r = o("WAWebWidFactory").createWid(t.jid),
              a = null;
            (r.isLid()
              ? (a = o(
                  "WAWebChatCollection",
                ).ChatCollection.getChatByAccountLid(r))
              : (a = o("WAWebChatCollection").ChatCollection.get(r)),
              (n = a) == null || n.set("toneId", t.toneId));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to set a custom tone for user prefs migration ",
                    "",
                  ])),
                t,
              )
              .tags("user-prefs-migration");
          }
        }),
        t.language != null &&
          t.language.length > 0 &&
          t.language !== r("WAWebL10N").getLocale() &&
          r("WAWebL10N").setLocale(
            t.language,
            o("WAWebL10NConstants").L10N_PRIORITY.SAVED,
            !1,
          ));
    }
    function c(e) {
      return e === 1
        ? o("WAWebWindowsShowNotificationBannerOption")
            .ShowNotificationBannerOption.Never
        : e === 2
          ? o("WAWebWindowsShowNotificationBannerOption")
              .ShowNotificationBannerOption.OnlyWhenAppIsOpen
          : o("WAWebWindowsShowNotificationBannerOption")
              .ShowNotificationBannerOption.Always;
    }
    function d(e) {
      return e === 1
        ? o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption
            .Never
        : e === 2
          ? o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption
              .OnlyWhenAppIsOpen
          : o("WAWebWindowsTaskbarNotificationOption").TaskbarNotificationOption
              .Always;
    }
    l.storeUserPreferences = u;
  },
  98,
);
