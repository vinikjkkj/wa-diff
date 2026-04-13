__d(
  "WAWebSettingsHierarchy",
  [
    "WAWebABProps",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizGatingUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebCurrentUser",
    "WAWebListsGatingUtils",
    "WAWebSettingGatingUtils",
    "WAWebSettingsConst",
    "WAWebSettingsFBT",
    "WAWebWamEnumSettingsItemType",
    "cr:1131",
    "cr:17208",
    "cr:687",
    "cr:7288",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:7288")) != null ? e : {},
      m = d.ShowNotificationBannerSettingsItem,
      p = (s = n("cr:1131")) != null ? s : {},
      _ = p.GeneralSettingsItem,
      f = p.SystemTraySettingsItem,
      g = (u = n("cr:17208")) != null ? u : {},
      h = g.AudioOutputSettingsItem,
      y = g.DeviceSettingsParentItem,
      C = g.MicrophoneSettingsItem,
      b = g.WebcamSettingsItem,
      v = (c = n("cr:687")) != null ? c : {},
      S = v.TaskbarNotificationSettingsItem;
    function R(e) {
      return (
        e === void 0 && (e = !1),
        [
          {
            business_tools: [
              "business_tools_business_profile",
              "business_tools_business_ai",
              "business_tools_catalog",
              "business_tools_orders",
              "business_tools_advertise",
              "business_tools_quick_replies",
              "business_tools_labels",
              "business_tools_help_center",
            ],
          },
          { win_general_settings: ["system_tray_setting"] },
          "profile",
          { account: ["security", "request_account_info", "delete_account"] },
          {
            privacy: [
              "wcs_last_seen",
              "wcs_profile_photo",
              "wcs_about_status",
              "wcs_read_receipts",
              "default_message_timer",
              "privacy_groups",
              "privacy_blocked",
              "screen_lock",
              { calls: ["call-silencing", "license"] },
            ],
          },
          "lists",
          {
            chats: ["theme", "wallpaper", "chat_theme", "media_auto_download"],
          },
          {
            device_settings: [
              "microphone_setting",
              "webcam_setting",
              "audio_output_setting",
            ],
          },
          {
            notifications: [
              "show_notification_banner",
              "taskbar_notification_settings",
              "message_notifications",
              "show_previews",
              "show_reaction_notifications",
              "sounds",
              "incoming_call_ringtone",
              "mute_incoming_calls",
            ],
          },
          "data_sharing",
          { desktop_settings: ["start_on_login"] },
          "language",
          "keyboard_shortcuts",
          {
            help: [
              "help_center",
              "contact_us",
              "send_feedback",
              "newsletter_reports",
              "terms",
            ],
          },
        ].concat(
          e === !1 ? ["bugnub", "download_logs"] : [],
          ["logout"],
          e === !0 ? ["divider"] : [],
          e === !0 ? ["bugnub", "download_logs"] : [],
          [
            {
              developer: [
                "developer_abprops",
                "developer_group_abprops",
                "developer_infra_settings",
              ],
            },
          ],
        )
      );
    }
    var L = {
        step: o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings,
        id: "request_account_info",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebSettingsFBT").requestAccountInfoTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").requestAccountInfoTitle,
        testid: "li-request-account-info",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
          .REQUEST_ACCOUNT_INFO,
      },
      E = {
        step: o("WAWebSettingsConst").SettingsSteps.Security,
        id: "security",
        isAvailable: !0,
        searchCriteria: String(o("WAWebSettingsFBT").securityTitle()),
        title: o("WAWebSettingsFBT").securityTitle,
        testid: "li-security",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE.SECURITY,
      },
      k = {
        step: o("WAWebSettingsConst").SettingsSteps.DeleteAccount,
        id: "delete_account",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebSettingsFBT").deleteAccountTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").deleteAccountTitle,
      },
      I = {
        step: o("WAWebSettingsConst").SettingsSteps.Wallpaper,
        id: "wallpaper",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebSettingsFBT").wallpaperTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").wallpaperTitle,
        testid: "li-wallpaper",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
          .CHAT_WALLPAPER,
      },
      T = {
        step: o("WAWebSettingsConst").SettingsSteps.ChatTheme,
        id: "chat_theme",
        isAvailable: function () {
          return o("WAWebChatThemeGatingUtils").isChatThemesEnabled();
        },
        searchCriteria: String(
          o("WAWebSettingsFBT").chatThemeTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").chatThemeTitle,
        testid: "li-chat-theme",
      },
      D = {
        step: o("WAWebSettingsConst").SettingsSteps.Theme,
        id: "theme",
        isAvailable: !0,
        searchCriteria: [
          String(o("WAWebSettingsFBT").themeTitle()),
          String(o("WAWebSettingsFBT").themeLightLabel()),
          String(o("WAWebSettingsFBT").themeDarkLabel()),
        ]
          .join(" ")
          .toLowerCase(),
        title: o("WAWebSettingsFBT").themeTitle,
        testid: "li-theme",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE.THEME,
      },
      x = {
        step: o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload,
        id: "media_auto_download",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebSettingsFBT").mediaAutoDownloadTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").mediaAutoDownloadTitle,
        testid: "li-media-auto-download",
        wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
          .MEDIA_AUTO_DOWNLOAD,
      },
      $ = {
        step: o("WAWebSettingsConst").SettingsSteps.MediaUploadQuality,
        id: "media_upload_quality",
        isAvailable: !0,
        searchCriteria: String(
          o("WAWebSettingsFBT").mediaUploadQualityTitle(),
        ).toLowerCase(),
        title: o("WAWebSettingsFBT").mediaUploadQualityTitle,
        testid: "li-media-upload-quality",
      };
    function P(e) {
      e === void 0 && (e = !1);
      var t = o("WAWebBizGatingUtils").isBizToolsDrawerEnabled(),
        n = [
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools",
            isAvailable: t,
            searchCriteria: String(o("WAWebSettingsFBT").businessToolsTitle()),
            title: o("WAWebSettingsFBT").businessToolsTitle,
            secondaryTitle: o("WAWebSettingsFBT").businessToolsSecondaryTitle,
            testid: "li-biz-tools",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .BUSINESS_TOOLS,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_business_profile",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsBusinessProfileTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsBusinessProfileTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_business_ai",
            isAvailable:
              t &&
              o("WAWebBizGatingUtils").isBizAIToolsSettingsEnabled() &&
              o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent(),
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsBusinessAITitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsBusinessAITitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_catalog",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsCatalogTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsCatalogTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_orders",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsOrdersTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsOrdersTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_advertise",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsAdvertiseTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsAdvertiseTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_quick_replies",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsQuickRepliesTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsQuickRepliesTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_labels",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsLabelsTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsLabelsTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.BusinessTools,
            id: "business_tools_help_center",
            isAvailable: t,
            searchCriteria: String(
              o("WAWebSettingsFBT").businessToolsHelpCenterTitle(),
            ),
            title: o("WAWebSettingsFBT").businessToolsHelpCenterTitle,
          },
          m,
          S,
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "notifications",
            isAvailable: !0,
            searchCriteria: String(o("WAWebSettingsFBT").notificationsTitle()),
            title: o("WAWebSettingsFBT").notificationsTitle,
            secondaryTitle: o("WAWebSettingsFBT").notificationsSecondaryTitle,
            testid: "li-notifications",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .NOTIFICATIONS,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "message_notifications",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").messageNotificationsTitle,
            searchCriteria: [
              String(o("WAWebSettingsFBT").messageNotificationsTitle()),
              String(o("WAWebSettingsFBT").messageNotificationsSubtitle()),
            ]
              .join(" ")
              .toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "show_previews",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").showPreviewsTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").showPreviewsTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "show_reaction_notifications",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").showReactionsTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").showReactionsTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "show-calls-notification",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").showCallsTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").showCallsTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "option-play-call-ringtone",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").playCallRingtoneTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").playCallRingtoneTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Notifications,
            id: "sounds",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").soundsTitle,
            searchCriteria: [
              String(o("WAWebSettingsFBT").soundsTitle()),
              String(o("WAWebSettingsFBT").soundsSubtitle()),
            ]
              .join(" ")
              .toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.PrivacySettings,
            id: "privacy",
            isAvailable: !0,
            searchCriteria: String(o("WAWebSettingsFBT").privacyTitle()),
            title: o("WAWebSettingsFBT").privacyTitle,
            secondaryTitle: o("WAWebSettingsFBT").privacySecondaryTitle,
            testid: "settings-drawer-item-privacy",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .PRIVACY,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps
              .PrivacyVisiblityEditLastSeen,
            id: "wcs_last_seen",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyLastSeenOnlineEnabledTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyLastSeenOnlineEnabledTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps
              .PrivacyVisiblityEditProfilePicture,
            id: "wcs_profile_photo",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyProfilePhotoTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyProfilePhotoTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps
              .PrivacyVisiblityEditAbout,
            id: "wcs_about_status",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyAboutTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyAboutTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.PrivacySettings,
            id: "wcs_read_receipts",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyReadReceiptsTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyReadReceiptsTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.DefaultEphemerality,
            id: "default_message_timer",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyDDMTitle,
            searchCriteria: [
              String(o("WAWebSettingsFBT").privacyDDMTitle()),
              String(o("WAWebSettingsFBT").privacyDMTitle()),
            ]
              .join(" ")
              .toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps
              .PrivacyVisiblityEditGroupAdd,
            id: "privacy_groups",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyGroupsTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyGroupsTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Blocked,
            id: "privacy_blocked",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyBlockedTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyBlockedTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.ScreenLock,
            id: "screen_lock",
            isAvailable: !0,
            title: o("WAWebSettingsFBT").privacyScreenlockTitle,
            searchCriteria: String(
              o("WAWebSettingsFBT").privacyScreenlockTitle(),
            ).toLowerCase(),
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.DataSharing,
            id: "data_sharing",
            isAvailable: r(
              "WAWebCommonCTWADataSharing",
            ).shouldDisplayDataSharingSetting(),
            searchCriteria: String(
              o("WAWebSettingsFBT").dataSharingTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").dataSharingTitle,
            testid: "li-data-sharing",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .DATA_SHARING,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Lists,
            id: "lists",
            isAvailable: o("WAWebListsGatingUtils").isListsM2Enabled(),
            searchCriteria: [
              String(o("WAWebSettingsFBT").listsTitle()),
              String(o("WAWebSettingsFBT").listsSecondaryTitle()),
            ]
              .join(" ")
              .toLowerCase(),
            secondaryTitle: o("WAWebSettingsFBT").listsSecondaryTitle,
            title: o("WAWebSettingsFBT").listsTitle,
            testid: "li-lists",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE.LISTS,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Language,
            id: "language",
            isAvailable: !1,
            searchCriteria: String(
              o("WAWebSettingsFBT").languageTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").languageTitle,
            testid: "li-language",
          },
          E,
          D,
          I,
          T,
          x,
          L,
          {
            step: o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts,
            id: "keyboard_shortcuts",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").keyboardShortcutsTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").keyboardShortcutsTitle,
            secondaryTitle:
              o("WAWebSettingsFBT").keyboardShortcutsSecondaryTitle,
            testid: "li-keyboard-shortcuts",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .KEYBOARD_SHORTCUTS,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Help,
            id: "help",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").helpTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").helpTitle,
            secondaryTitle: o("WAWebSettingsFBT").helpSecondaryTitle,
            testid: "li-help",
            wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE.HELP,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Help,
            id: "help_center",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").helpCenterTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").helpCenterTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Help,
            id: "contact_us",
            isAvailable: !0,
            searchCriteria: String(o("WAWebSettingsFBT").contactUsTitle()),
            title: o("WAWebSettingsFBT").contactUsTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Help,
            id: "send_feedback",
            isAvailable: function () {
              return o("WAWebABProps").getABPropConfigValue(
                "web_internal_in_app_bug_reporting_enable",
              );
            },
            searchCriteria: String(
              o("WAWebSettingsFBT").sendFeedbackTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").sendFeedbackTitle,
            testid: "li-send-feedback",
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.NewsletterReports,
            id: "newsletter_reports",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").newsletterReportsTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").newsletterReportsTitle,
            testid: "li-newsletter-reports",
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Help,
            id: "terms",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").termsTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").termsTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.DeleteAccount,
            id: "delete_account",
            isAvailable: !0,
            searchCriteria: String(
              o("WAWebSettingsFBT").deleteAccountTitle(),
            ).toLowerCase(),
            title: o("WAWebSettingsFBT").deleteAccountTitle,
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.Bugnub,
            id: "bugnub",
            isAvailable: o("WAWebCurrentUser").isEmployee(),
            searchCriteria: "Report a bug",
            title: function () {
              return "Report a bug (internal)";
            },
            secondaryTitle: function () {
              return "Tell us what went wrong";
            },
          },
          {
            step: o("WAWebSettingsConst").SettingsSteps.DownloadLogs,
            id: "download_logs",
            isAvailable: function () {
              return (
                o("WAWebCurrentUser").isEmployee() ||
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_log_download",
                )
              );
            },
            searchCriteria: "download logs",
            title: function () {
              return "Download logs";
            },
          },
        ]
          .concat(
            r("gkx")("26258")
              ? []
              : [
                  {
                    step: o("WAWebSettingsConst").SettingsSteps.Developer,
                    id: "developer",
                    isAvailable: !r("gkx")("26258"),
                    searchCriteria: String(
                      o("WAWebSettingsFBT").developerTitle(),
                    ),
                    title: o("WAWebSettingsFBT").developerTitle,
                    secondaryTitle:
                      o("WAWebSettingsFBT").developerSecondaryTitle,
                    testid: "li-developer",
                    wamName: o("WAWebWamEnumSettingsItemType")
                      .SETTINGS_ITEM_TYPE.DEVELOPER,
                    isDevOnly: !0,
                  },
                  {
                    step: o("WAWebSettingsConst").SettingsSteps
                      .DeveloperABProps,
                    id: "developer_abprops",
                    isAvailable: !r("gkx")("26258"),
                    searchCriteria: String(
                      o("WAWebSettingsFBT").developerABPropsTitle(),
                    ),
                    title: o("WAWebSettingsFBT").developerABPropsTitle,
                    testid: "li-developer-abprops",
                    wamName: o("WAWebWamEnumSettingsItemType")
                      .SETTINGS_ITEM_TYPE.DEVELOPER,
                    isDevOnly: !0,
                  },
                  {
                    step: o("WAWebSettingsConst").SettingsSteps
                      .DeveloperGroupABProps,
                    id: "developer_group_abprops",
                    isAvailable: !r("gkx")("26258"),
                    searchCriteria: String(
                      o("WAWebSettingsFBT").developerGroupABPropsTitle(),
                    ),
                    title: o("WAWebSettingsFBT").developerGroupABPropsTitle,
                    testid: "li-developer-group-abprops",
                    wamName: o("WAWebWamEnumSettingsItemType")
                      .SETTINGS_ITEM_TYPE.DEVELOPER,
                    isDevOnly: !0,
                  },
                  {
                    step: o("WAWebSettingsConst").SettingsSteps
                      .DeveloperInfraSettings,
                    id: "developer_infra_settings",
                    isAvailable: !r("gkx")("26258"),
                    searchCriteria: String(
                      o("WAWebSettingsFBT").developerInfraSettingsTitle(),
                    ),
                    title: o("WAWebSettingsFBT").developerInfraSettingsTitle,
                    testid: "li-developer-infra",
                    wamName: o("WAWebWamEnumSettingsItemType")
                      .SETTINGS_ITEM_TYPE.DEVELOPER,
                    isDevOnly: !0,
                  },
                  {
                    step: o("WAWebSettingsConst").SettingsSteps
                      .DeveloperInfraSettings,
                    id: "developer_infra_settings",
                    isAvailable: !r("gkx")("26258"),
                    searchCriteria: String(
                      o("WAWebSettingsFBT").developerWWWSettingsTitle(),
                    ),
                    title: o("WAWebSettingsFBT").developerWWWSettingsTitle,
                    testid: "li-developer-www",
                    wamName: o("WAWebWamEnumSettingsItemType")
                      .SETTINGS_ITEM_TYPE.DEVELOPER,
                    isDevOnly: !0,
                  },
                ],
            [
              {
                step: o("WAWebSettingsConst").SettingsSteps.Logout,
                id: "logout",
                isAvailable: !0,
                searchCriteria: String(o("WAWebSettingsFBT").logoutTitle()),
                title: o("WAWebSettingsFBT").logoutTitle,
                wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                  .LOGOUT,
                testid: "li-logout",
                color: "critical",
              },
              {
                step: o("WAWebSettingsConst").SettingsSteps.Profile,
                id: "profile",
                isAvailable: function () {
                  return o("WAWebSettingGatingUtils").isMeTabEnabled();
                },
                searchCriteria: String(o("WAWebSettingsFBT").profileTitle()),
                title: o("WAWebSettingsFBT").profileTitle,
                secondaryTitle: o("WAWebSettingsFBT").profileSecondaryTitle,
                wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                  .PROFILE,
                testid: "li-profile",
              },
              {
                step: o("WAWebSettingsConst").SettingsSteps.Account,
                id: "account",
                isAvailable: !0,
                searchCriteria: String(o("WAWebSettingsFBT").accountTitle()),
                title: o("WAWebSettingsFBT").accountTitle,
                secondaryTitle: o("WAWebSettingsFBT").accountSecondaryTitle,
                wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                  .ACCOUNT,
                testid: "li-account",
              },
              {
                step: o("WAWebSettingsConst").SettingsSteps.Chats,
                id: "chats",
                isAvailable: !0,
                searchCriteria: String(o("WAWebSettingsFBT").chatsTitle()),
                title: o("WAWebSettingsFBT").chatsTitle,
                secondaryTitle: o("WAWebSettingsFBT").chatsSecondaryTitle,
                wamName: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                  .CHATS,
                testid: "li-chats",
              },
              {
                step: o("WAWebSettingsConst").SettingsSteps.Divider,
                id: "divider",
                isAvailable: !0,
                title: function () {
                  return "divider";
                },
                testid: "li-divider",
              },
              _,
              f,
              y,
              C,
              b,
              h,
            ],
          )
          .filter(Boolean),
        a = n.reduce(function (e, t) {
          return (e.set(t.id, t), e);
        }, new Map()),
        i = [];
      function l(e, t) {
        for (var n of t)
          if (typeof n == "string") {
            var r = a.get(n);
            r != null && ((r.parentId = e), i.push(r));
          } else
            for (var o of Object.getOwnPropertyNames(n)) {
              var s = a.get(o);
              (s != null && ((s.parentId = e), i.push(s)), l(o, n[o]));
            }
      }
      return (l(null, R(e)), i);
    }
    function N(e) {
      var t = {};
      return e.map(function (e) {
        var n = babelHelpers.extends({}, e);
        return (
          t[n.id] == null && (t[n.id] = n),
          n.searchCriteria != null &&
            (n.searchCriteria = n.searchCriteria.toLowerCase()),
          n.parentId != null &&
            ((n.parent = t[n.parentId]),
            n.parent != null &&
              n.parent.searchCriteria != null &&
              (n.searchCriteria == null && (n.searchCriteria = ""),
              n.parent.searchCriteria != null &&
                (n.searchCriteria += n.parent.searchCriteria))),
          n
        );
      });
    }
    ((l.RequestAccountInfoSettingsItem = L),
      (l.SecuritySettingsItem = E),
      (l.DeleteAccountSettingsItem = k),
      (l.ThemeSettingsItem = D),
      (l.MediaAutoDownloadSettingsItem = x),
      (l.MediaUploadQualitySettingsItem = $),
      (l.getSettingsSearchHierarchy = P),
      (l.buildSearchableHierarchy = N));
  },
  98,
);
