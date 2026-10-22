__d(
  "WAWebSettingsBridgeApi",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebMuteCollection",
    "WAWebNormalizeThemeId",
    "WAWebProtobufSyncAction.pb",
    "WAWebSettingsBridgeThemeDebouncer",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebSettingsSyncEventEmitter",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:12510",
    "cr:12511",
    "cr:12512",
    "cr:12513",
    "cr:17219",
    "cr:7293",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = (e = n("cr:12510")) != null ? e : {},
      v = b.NotificationToneOption,
      S = (s = n("cr:12511")) != null ? s : {},
      R = S.ShowNotificationBannerOption,
      L = (u = n("cr:12512")) != null ? u : {},
      E = L.TaskbarNotificationOption,
      k = (c = n("cr:7293")) != null ? c : {},
      I = k.setNotificationBannerSetting,
      T = k.setNotificationToneGroupSetting,
      D = k.setNotificationToneSetting,
      x = k.setStatusReactionsSetting,
      $ = k.setTaskbarNotificationSetting,
      P = (d = n("cr:12513")) != null ? d : {},
      N = P.setIsSystemTrayEnabled,
      M = (m = n("cr:17219")) != null ? m : {},
      w = M.getWindowsBridge,
      A = (p = n("cr:7293")) != null ? p : {},
      F = A.setNotificationToneStatusSetting,
      O = {
        updateAccountLinkingStatus: function (t) {
          var e = t.isFBLinked,
            n = t.isIGLinked,
            o = t.linkState;
          ((r("WAWebSettingsModel").isFBLinked = e),
            (r("WAWebSettingsModel").isIGLinked = n),
            (r("WAWebSettingsModel").linkState = o));
        },
        updateCrosspostAutoShareSettings: function (t) {
          var e = t.shareToFB,
            n = t.shareToIG;
          (e != null && (r("WAWebSettingsModel").shareToFB = e),
            n != null && (r("WAWebSettingsModel").shareToIG = n));
        },
        applyAppSetting: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.field,
              n = e.timestamp,
              a = e.value;
            switch (t) {
              case "startAtLogin": {
                if (w != null) {
                  var i;
                  (i = w(
                    r("WAWebWindowsHybridBridgeInitiator")
                      .WAWebSettingsBridgeApi,
                  )) == null ||
                    (i = i.systemIntegrationsBridge) == null ||
                    i.updateStartupTask(!!a);
                }
                return;
              }
              case "minimizeToTray":
                N != null && (N == null || N(!!a));
                return;
              case "language":
                typeof a == "string" &&
                  a.length > 0 &&
                  r("WAWebSettingsSyncEventEmitter").trigger(
                    "applyLanguage",
                    a,
                  );
                return;
              case "replaceTextWithEmoji": {
                var l = r("WAWebChatPreferenceCollection").getDefault();
                l.set("transformTextEmoji", !!a);
                return;
              }
              case "isSpellCheckEnabled": {
                var s = r("WAWebChatPreferenceCollection").getDefault();
                s.set("spellcheck", !!a);
                return;
              }
              case "isEnterToSendEnabled": {
                var u = r("WAWebChatPreferenceCollection").getDefault();
                u.set("enterIsSend", !!a);
                return;
              }
              case "bannerNotificationDisplayMode": {
                var c = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$DisplayMode.cast(
                  Number(a),
                );
                if (c == null || R == null) return;
                switch (c) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    I == null || I(R == null ? void 0 : R.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    I == null || I(R == null ? void 0 : R.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    I == null || I(R == null ? void 0 : R.Always);
                    break;
                  default:
                    return;
                }
                return;
              }
              case "unreadCounterBadgeDisplayMode": {
                var d = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$DisplayMode.cast(
                  Number(a),
                );
                if (d == null || E == null) return;
                switch (d) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    $ == null || $(E == null ? void 0 : E.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    $ == null || $(E == null ? void 0 : E.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    $ == null || $(E == null ? void 0 : E.Always);
                    break;
                  default:
                    return;
                }
                return;
              }
              case "isMessagesNotificationEnabled":
                o("WAWebMuteCollection").MuteCollection.setGlobalNotifications(
                  !!a,
                );
                return;
              case "isCallsNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalCallNotificationsFromSync(!!a, n);
                return;
              case "isReactionsNotificationEnabled": {
                var m = !!a;
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalNotificationReactionsEnabled(m);
                return;
              }
              case "isStatusReactionsNotificationEnabled": {
                var p = !!a;
                (x == null || x(p),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(
                    p,
                  ));
                return;
              }
              case "isTextPreviewForNotificationEnabled":
                o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(!!a);
                return;
              case "isGroupMessageNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalGroupNotificationsEnabled(!!a);
                return;
              case "isGroupReactionsNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(
                  !!a,
                );
                return;
              case "isStatusNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalStatusNotificationsEnabled(!!a);
                return;
              case "statusNotificationToneId": {
                var h;
                if (v == null) return;
                var y =
                  (h = v == null ? void 0 : v.cast(Number(a))) != null
                    ? h
                    : v == null
                      ? void 0
                      : v.Default;
                (F == null || F(y),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(y !== v.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!a,
                );
                return;
              case "defaultNotificationToneId": {
                var C;
                if (v == null) return;
                var b =
                  (C = v == null ? void 0 : v.cast(Number(a))) != null
                    ? C
                    : v == null
                      ? void 0
                      : v.Default;
                D == null || D(b);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var S;
                if (v == null) return;
                var L =
                  (S = v == null ? void 0 : v.cast(Number(a))) != null
                    ? S
                    : v == null
                      ? void 0
                      : v.Default;
                T == null || T(L);
                return;
              }
              case "appTheme":
                typeof a == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyTheme", a);
                return;
              case "wallpaperId":
                typeof a == "number" &&
                  o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
                    { kind: "default" },
                    { field: "wallpaperSolid", wallpaperId: a },
                  );
                return;
              case "isDoodleWallpaperEnabled":
                o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
                  { kind: "default" },
                  { field: "doodle", value: !!a },
                );
                return;
              case "chatThemeId":
                o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
                  { kind: "default" },
                  {
                    field: "chatThemeId",
                    normalizedId:
                      typeof a == "string"
                        ? r("WAWebNormalizeThemeId")(a)
                        : null,
                  },
                );
                return;
              case "colorSchemeId":
                o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
                  { kind: "default" },
                  {
                    field: "colorSchemeId",
                    normalizedId:
                      typeof a == "string"
                        ? r("WAWebNormalizeThemeId")(a)
                        : null,
                  },
                );
                return;
              case "stockWallpaperImageId":
                o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
                  { kind: "default" },
                  { field: "wallpaperStock", rawValue: a },
                );
                return;
              case "fontSize": {
                typeof a == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyZoom", a);
                return;
              }
              case "mediaUploadQuality": {
                var k = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(
                  Number(a),
                );
                if (k == null) {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Invalid media upload quality setting: ",
                        "",
                      ])),
                    a,
                  );
                  return;
                }
                var P = r("WAWebChatPreferenceCollection").getDefault();
                switch (k) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD:
                    P.set("hdMediaEnabled", 1);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                    .STANDARD:
                    P.set("hdMediaEnabled", 0);
                    break;
                  default:
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Invalid media upload quality setting: ",
                          "",
                        ])),
                      a,
                    );
                    return;
                }
                return;
              }
              case "isPhotosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(!!a);
                return;
              case "isAudiosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadAudio(!!a);
                return;
              case "isVideosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadVideos(!!a);
                return;
              case "isDocumentsAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(!!a);
                return;
              case "disableLinkPreviews":
                return;
              case "archive": {
                r("WAWebSettingsModel").archive = babelHelpers.extends(
                  {},
                  o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")),
                  a,
                );
                return;
              }
              default:
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[settings-sync] Unknown app-level setting field: ",
                      "",
                    ])),
                  t,
                );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        applyPerChatSetting: function (t) {
          var e = t.chatJid,
            n = t.field,
            a = t.value;
          switch (n) {
            case "notificationToneId": {
              try {
                var i,
                  l = o("WAWebWidFactory").createWid(e),
                  s = null;
                (l.isLid()
                  ? (s = o(
                      "WAWebChatCollection",
                    ).ChatCollection.getChatByAccountLid(l))
                  : (s = o("WAWebChatCollection").ChatCollection.get(l)),
                  (i = s) == null || i.set("toneId", a));
              } catch (t) {
                throw (
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Failed to set notification tone for ",
                          ": ",
                          "",
                        ])),
                      e,
                      String(t),
                    )
                    .tags("settings-sync"),
                  t
                );
              }
              return;
            }
            case "chatThemeId":
            case "colorSchemeId": {
              var u =
                typeof a == "string" ? r("WAWebNormalizeThemeId")(a) : null;
              B({
                chatJid: e,
                field: n,
                mutation:
                  n === "chatThemeId"
                    ? { field: "chatThemeId", normalizedId: u }
                    : { field: "colorSchemeId", normalizedId: u },
              });
              return;
            }
            case "isDoodleWallpaperEnabled":
              if (typeof a != "boolean") return;
              B({
                chatJid: e,
                field: n,
                mutation: { field: "doodle", value: a },
              });
              return;
            case "wallpaperId":
              typeof a == "number" &&
                B({
                  chatJid: e,
                  field: n,
                  mutation: { field: "wallpaperSolid", wallpaperId: a },
                });
              return;
            case "stockWallpaperImageId":
              B({
                chatJid: e,
                field: n,
                mutation: { field: "wallpaperStock", rawValue: a },
              });
              return;
            default:
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[settings-sync] Unknown per-chat setting field: ",
                    "",
                  ])),
                n,
              );
          }
        },
        restoreArchiveV2Settings: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getArchiveV2EnabledSetting(),
              t = yield o(
                "WAWebUserPrefsMultiDevice",
              ).getUnarchiveChatsSetting();
            (e != null &&
              (r("WAWebSettingsModel").archive = babelHelpers.extends(
                {},
                o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")),
                { enabled: e },
              )),
              t != null &&
                (r("WAWebSettingsModel").archive = babelHelpers.extends(
                  {},
                  o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")),
                  { classic: t },
                )));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function B(e) {
      var t = e.chatJid,
        n = e.field,
        a = e.mutation;
      try {
        o("WAWebSettingsBridgeThemeDebouncer").enqueueThemeSync(
          { kind: "chat", chatJid: t },
          a,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[settings-sync] Failed to enqueue per-chat ",
                  " for ",
                  "",
                ])),
              n,
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("chat-theme-sync-enqueue-failed"),
          e
        );
      }
    }
    l.SettingsBridgeApi = O;
  },
  98,
);
