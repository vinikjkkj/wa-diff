__d(
  "WAWebSettingsBridgeApi",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebMuteCollection",
    "WAWebNormalizeThemeId",
    "WAWebProtobufSyncAction.pb",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebSettingsSyncEventEmitter",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:12510",
    "cr:12511",
    "cr:12512",
    "cr:12513",
    "cr:17219",
    "cr:7293",
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
              n = e.value;
            switch (t) {
              case "startAtLogin": {
                if (w != null) {
                  var a;
                  (a = w()) == null ||
                    (a = a.systemIntegrationsBridge) == null ||
                    a.updateStartupTask(!!n);
                }
                return;
              }
              case "minimizeToTray":
                N != null && (N == null || N(!!n));
                return;
              case "language":
                typeof n == "string" &&
                  n.length > 0 &&
                  r("WAWebSettingsSyncEventEmitter").trigger(
                    "applyLanguage",
                    n,
                  );
                return;
              case "replaceTextWithEmoji": {
                var i = r("WAWebChatPreferenceCollection").getDefault();
                i.set("transformTextEmoji", !!n);
                return;
              }
              case "isSpellCheckEnabled": {
                var l = r("WAWebChatPreferenceCollection").getDefault();
                l.set("spellcheck", !!n);
                return;
              }
              case "isEnterToSendEnabled": {
                var s = r("WAWebChatPreferenceCollection").getDefault();
                s.set("enterIsSend", !!n);
                return;
              }
              case "bannerNotificationDisplayMode": {
                var u = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$DisplayMode.cast(
                  Number(n),
                );
                if (u == null || R == null) return;
                switch (u) {
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
                var c = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$DisplayMode.cast(
                  Number(n),
                );
                if (c == null || E == null) return;
                switch (c) {
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
                  !!n,
                );
                return;
              case "isCallsNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalCallNotifications(!!n);
                return;
              case "isReactionsNotificationEnabled": {
                var d = !!n;
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalNotificationReactionsEnabled(d);
                return;
              }
              case "isStatusReactionsNotificationEnabled": {
                var m = !!n;
                (x == null || x(m),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(
                    m,
                  ));
                return;
              }
              case "isTextPreviewForNotificationEnabled":
                o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(!!n);
                return;
              case "isGroupMessageNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalGroupNotificationsEnabled(!!n);
                return;
              case "isGroupReactionsNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(
                  !!n,
                );
                return;
              case "isStatusNotificationEnabled":
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.setGlobalStatusNotificationsEnabled(!!n);
                return;
              case "statusNotificationToneId": {
                var p;
                if (v == null) return;
                var h =
                  (p = v == null ? void 0 : v.cast(Number(n))) != null
                    ? p
                    : v == null
                      ? void 0
                      : v.Default;
                (F == null || F(h),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(h !== v.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!n,
                );
                return;
              case "defaultNotificationToneId": {
                var y;
                if (v == null) return;
                var C =
                  (y = v == null ? void 0 : v.cast(Number(n))) != null
                    ? y
                    : v == null
                      ? void 0
                      : v.Default;
                D == null || D(C);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var b;
                if (v == null) return;
                var S =
                  (b = v == null ? void 0 : v.cast(Number(n))) != null
                    ? b
                    : v == null
                      ? void 0
                      : v.Default;
                T == null || T(S);
                return;
              }
              case "appTheme":
                typeof n == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyTheme", n);
                return;
              case "wallpaperId":
                typeof n == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger(
                    "applyWallpaper",
                    n,
                  );
                return;
              case "isDoodleWallpaperEnabled": {
                var L = r("WAWebChatPreferenceCollection").getDefault();
                L.set("showDoodle", !!n);
                return;
              }
              case "chatThemeId": {
                var k = r("WAWebChatPreferenceCollection").getDefault();
                k.set(
                  "chatThemeId",
                  typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                );
                return;
              }
              case "colorSchemeId": {
                var P = r("WAWebChatPreferenceCollection").getDefault();
                P.set(
                  "colorSchemeId",
                  typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                );
                return;
              }
              case "fontSize": {
                typeof n == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyZoom", n);
                return;
              }
              case "mediaUploadQuality": {
                var M = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(
                  Number(n),
                );
                if (M == null) {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Invalid media upload quality setting: ",
                        "",
                      ])),
                    n,
                  );
                  return;
                }
                var A = r("WAWebChatPreferenceCollection").getDefault();
                switch (M) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD:
                    A.set("hdMediaEnabled", 1);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                    .STANDARD:
                    A.set("hdMediaEnabled", 0);
                    break;
                  default:
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Invalid media upload quality setting: ",
                          "",
                        ])),
                      n,
                    );
                    return;
                }
                return;
              }
              case "isPhotosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadPhotos(!!n);
                return;
              case "isAudiosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadAudio(!!n);
                return;
              case "isVideosAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadVideos(!!n);
                return;
              case "isDocumentsAutodownloadEnabled":
                o("WAWebUserPrefsGeneral").setAutoDownloadDocuments(!!n);
                return;
              case "disableLinkPreviews":
                return;
              case "archive": {
                r("WAWebSettingsModel").archive = babelHelpers.extends(
                  {},
                  o("WAWebSettingsGetters").getArchive(r("WAWebSettingsModel")),
                  n,
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
              try {
                var u,
                  c = o("WAWebWidFactory").createWid(e),
                  d = null;
                (c.isLid()
                  ? (d = o(
                      "WAWebChatCollection",
                    ).ChatCollection.getChatByAccountLid(c))
                  : (d = o("WAWebChatCollection").ChatCollection.get(c)),
                  (u = d) == null ||
                    u.set(
                      n,
                      typeof a == "string"
                        ? r("WAWebNormalizeThemeId")(a)
                        : null,
                    ));
              } catch (t) {
                throw (
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Failed to set ",
                          " for ",
                          ": ",
                          "",
                        ])),
                      n,
                      e,
                      String(t),
                    )
                    .tags("settings-sync"),
                  t
                );
              }
              return;
            }
            default:
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
    l.SettingsBridgeApi = O;
  },
  98,
);
