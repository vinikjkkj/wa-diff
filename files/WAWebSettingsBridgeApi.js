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
      S,
      R = (e = n("cr:12510")) != null ? e : {},
      L = R.NotificationToneOption,
      E = (s = n("cr:12511")) != null ? s : {},
      k = E.ShowNotificationBannerOption,
      I = (u = n("cr:12512")) != null ? u : {},
      T = I.TaskbarNotificationOption,
      D = (c = n("cr:7293")) != null ? c : {},
      x = D.setNotificationBannerSetting,
      $ = D.setNotificationToneGroupSetting,
      P = D.setNotificationToneSetting,
      N = D.setStatusReactionsSetting,
      M = D.setTaskbarNotificationSetting,
      w = (d = n("cr:12513")) != null ? d : {},
      A = w.setIsSystemTrayEnabled,
      F = (m = n("cr:17219")) != null ? m : {},
      O = F.getWindowsBridge,
      B = (p = n("cr:7293")) != null ? p : {},
      W = B.setNotificationToneStatusSetting,
      q = {
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
                if (O != null) {
                  var a;
                  (a = O()) == null ||
                    (a = a.systemIntegrationsBridge) == null ||
                    a.updateStartupTask(!!n);
                }
                return;
              }
              case "minimizeToTray":
                A != null && (A == null || A(!!n));
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
                if (u == null || k == null) return;
                switch (u) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    x == null || x(k == null ? void 0 : k.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    x == null || x(k == null ? void 0 : k.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    x == null || x(k == null ? void 0 : k.Always);
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
                if (c == null || T == null) return;
                switch (c) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    M == null || M(T == null ? void 0 : T.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    M == null || M(T == null ? void 0 : T.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    M == null || M(T == null ? void 0 : T.Always);
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
                (N == null || N(m),
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
                if (L == null) return;
                var C =
                  (p = L == null ? void 0 : L.cast(Number(n))) != null
                    ? p
                    : L == null
                      ? void 0
                      : L.Default;
                (W == null || W(C),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(C !== L.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!n,
                );
                return;
              case "defaultNotificationToneId": {
                var b;
                if (L == null) return;
                var v =
                  (b = L == null ? void 0 : L.cast(Number(n))) != null
                    ? b
                    : L == null
                      ? void 0
                      : L.Default;
                P == null || P(v);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var S;
                if (L == null) return;
                var R =
                  (S = L == null ? void 0 : L.cast(Number(n))) != null
                    ? S
                    : L == null
                      ? void 0
                      : L.Default;
                $ == null || $(R);
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
                var E = r("WAWebChatPreferenceCollection").getDefault();
                E.set(
                  "wallpaperValue",
                  o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                    E.wallpaperValue,
                    !!n,
                  ),
                );
                return;
              }
              case "chatThemeId": {
                var I = r("WAWebChatPreferenceCollection").getDefault(),
                  D = I.chatThemeValue,
                  w =
                    typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                  F = o("WAWebChatThemeValue").chatThemeValueFromFlat({
                    chatThemeId: w,
                    colorSchemeId:
                      (D == null ? void 0 : D.colorSchemeId) != null
                        ? D.colorSchemeId
                        : null,
                  });
                (w != null &&
                  F.chatThemeId == null &&
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
                  I.set("chatThemeValue", F));
                return;
              }
              case "colorSchemeId": {
                var B = r("WAWebChatPreferenceCollection").getDefault(),
                  q = B.chatThemeValue,
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
                  B.set("chatThemeValue", V));
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
            case "isDoodleWallpaperEnabled": {
              if (typeof a != "boolean") return;
              try {
                var g = o("WAWebWidFactory").createWid(e),
                  h = g.isLid()
                    ? o(
                        "WAWebChatCollection",
                      ).ChatCollection.getChatByAccountLid(g)
                    : o("WAWebChatCollection").ChatCollection.get(g);
                h != null &&
                  h.setWallpaperValue(
                    o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                      h.wallpaperValue,
                      a,
                    ),
                  );
              } catch (t) {
                throw (
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Failed to set doodle for ",
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
            case "wallpaperId": {
              typeof a == "number" &&
                r("WAWebSettingsSyncEventEmitter").trigger(
                  "applyPerChatWallpaper",
                  { chatJid: e, wallpaperId: a },
                );
              return;
            }
            default:
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
    l.SettingsBridgeApi = q;
  },
  98,
);
