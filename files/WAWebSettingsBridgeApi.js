__d(
  "WAWebSettingsBridgeApi",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeValue",
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
      b,
      v,
      S = (e = n("cr:12510")) != null ? e : {},
      R = S.NotificationToneOption,
      L = (s = n("cr:12511")) != null ? s : {},
      E = L.ShowNotificationBannerOption,
      k = (u = n("cr:12512")) != null ? u : {},
      I = k.TaskbarNotificationOption,
      T = (c = n("cr:7293")) != null ? c : {},
      D = T.setNotificationBannerSetting,
      x = T.setNotificationToneGroupSetting,
      $ = T.setNotificationToneSetting,
      P = T.setStatusReactionsSetting,
      N = T.setTaskbarNotificationSetting,
      M = (d = n("cr:12513")) != null ? d : {},
      w = M.setIsSystemTrayEnabled,
      A = (m = n("cr:17219")) != null ? m : {},
      F = A.getWindowsBridge,
      O = (p = n("cr:7293")) != null ? p : {},
      B = O.setNotificationToneStatusSetting,
      W = {
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
                if (F != null) {
                  var a;
                  (a = F()) == null ||
                    (a = a.systemIntegrationsBridge) == null ||
                    a.updateStartupTask(!!n);
                }
                return;
              }
              case "minimizeToTray":
                w != null && (w == null || w(!!n));
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
                if (u == null || E == null) return;
                switch (u) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    D == null || D(E == null ? void 0 : E.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    D == null || D(E == null ? void 0 : E.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    D == null || D(E == null ? void 0 : E.Always);
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
                if (c == null || I == null) return;
                switch (c) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    N == null || N(I == null ? void 0 : I.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    N == null || N(I == null ? void 0 : I.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    N == null || N(I == null ? void 0 : I.Always);
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
                (P == null || P(m),
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
                if (R == null) return;
                var C =
                  (p = R == null ? void 0 : R.cast(Number(n))) != null
                    ? p
                    : R == null
                      ? void 0
                      : R.Default;
                (B == null || B(C),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(C !== R.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!n,
                );
                return;
              case "defaultNotificationToneId": {
                var b;
                if (R == null) return;
                var v =
                  (b = R == null ? void 0 : R.cast(Number(n))) != null
                    ? b
                    : R == null
                      ? void 0
                      : R.Default;
                $ == null || $(v);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var S;
                if (R == null) return;
                var L =
                  (S = R == null ? void 0 : R.cast(Number(n))) != null
                    ? S
                    : R == null
                      ? void 0
                      : R.Default;
                x == null || x(L);
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
                var k = r("WAWebChatPreferenceCollection").getDefault();
                k.set(
                  "wallpaperValue",
                  o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                    k.wallpaperValue,
                    !!n,
                  ),
                );
                return;
              }
              case "chatThemeId": {
                var T = r("WAWebChatPreferenceCollection").getDefault(),
                  M = T.chatThemeValue,
                  A =
                    typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                  O = o("WAWebChatThemeValue").chatThemeValueFromFlat({
                    chatThemeId: A,
                    colorSchemeId:
                      (M == null ? void 0 : M.colorSchemeId) != null
                        ? M.colorSchemeId
                        : null,
                  });
                (A != null &&
                  O.chatThemeId == null &&
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Unrecognized chatThemeId ",
                          "",
                        ])),
                      String(n),
                    )
                    .sendLogs("chat-theme-sync-unknown-theme"),
                  T.set("chatThemeValue", O));
                return;
              }
              case "colorSchemeId": {
                var W = r("WAWebChatPreferenceCollection").getDefault(),
                  q = W.chatThemeValue,
                  U =
                    typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                  V = o("WAWebChatThemeValue").chatThemeValueFromFlat({
                    chatThemeId:
                      (q == null ? void 0 : q.chatThemeId) != null
                        ? q.chatThemeId
                        : null,
                    colorSchemeId: U,
                  });
                (U != null &&
                  V.colorSchemeId == null &&
                  o("WALogger")
                    .WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Unrecognized colorSchemeId ",
                          "",
                        ])),
                      String(n),
                    )
                    .sendLogs("chat-theme-sync-unknown-color-scheme"),
                  W.set("chatThemeValue", V));
                return;
              }
              case "fontSize": {
                typeof n == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyZoom", n);
                return;
              }
              case "mediaUploadQuality": {
                var H = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(
                  Number(n),
                );
                if (H == null) {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[settings-sync] Invalid media upload quality setting: ",
                        "",
                      ])),
                    n,
                  );
                  return;
                }
                var G = r("WAWebChatPreferenceCollection").getDefault();
                switch (H) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD:
                    G.set("hdMediaEnabled", 1);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                    .STANDARD:
                    G.set("hdMediaEnabled", 0);
                    break;
                  default:
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
                var u = o("WAWebWidFactory").createWid(e),
                  c = null;
                if (
                  (u.isLid()
                    ? (c = o(
                        "WAWebChatCollection",
                      ).ChatCollection.getChatByAccountLid(u))
                    : (c = o("WAWebChatCollection").ChatCollection.get(u)),
                  c != null)
                ) {
                  var d = c.chatThemeValue,
                    m =
                      typeof a == "string"
                        ? r("WAWebNormalizeThemeId")(a)
                        : null,
                    p =
                      (d == null ? void 0 : d.chatThemeId) != null
                        ? d.chatThemeId
                        : null,
                    _ =
                      (d == null ? void 0 : d.colorSchemeId) != null
                        ? d.colorSchemeId
                        : null,
                    f = o("WAWebChatThemeValue").chatThemeValueFromFlat({
                      chatThemeId: n === "chatThemeId" ? m : p,
                      colorSchemeId: n === "colorSchemeId" ? m : _,
                    });
                  c.setChatThemeValue(
                    f.chatThemeId == null && f.colorSchemeId == null ? null : f,
                  );
                }
              } catch (t) {
                throw (
                  o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
    l.SettingsBridgeApi = W;
  },
  98,
);
