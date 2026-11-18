__d(
  "WAWebSettingsBridgeApi",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebMediaAutoDownloadQualitySync",
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
      C = (e = n("cr:12510")) != null ? e : {},
      b = C.NotificationToneOption,
      v = (s = n("cr:12511")) != null ? s : {},
      S = v.ShowNotificationBannerOption,
      R = (u = n("cr:12512")) != null ? u : {},
      L = R.TaskbarNotificationOption,
      E = (c = n("cr:7293")) != null ? c : {},
      k = E.setNotificationBannerSetting,
      I = E.setNotificationToneGroupSetting,
      T = E.setNotificationToneSetting,
      D = E.setStatusReactionsSetting,
      x = E.setTaskbarNotificationSetting,
      $ = (d = n("cr:12513")) != null ? d : {},
      P = $.setIsSystemTrayEnabled,
      N = (m = n("cr:17219")) != null ? m : {},
      M = N.getWindowsBridge,
      w = (p = n("cr:7293")) != null ? p : {},
      A = w.setNotificationToneStatusSetting,
      F = {
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
                if (M != null) {
                  var i;
                  (i = M(
                    r("WAWebWindowsHybridBridgeInitiator")
                      .WAWebSettingsBridgeApi,
                  )) == null ||
                    (i = i.systemIntegrationsBridge) == null ||
                    i.updateStartupTask(!!a);
                }
                return;
              }
              case "minimizeToTray":
                P != null && (P == null || P(!!a));
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
                if (c == null || S == null) return;
                switch (c) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    k == null || k(S == null ? void 0 : S.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    k == null || k(S == null ? void 0 : S.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    k == null || k(S == null ? void 0 : S.Always);
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
                if (d == null || L == null) return;
                switch (d) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    x == null || x(L == null ? void 0 : L.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    x == null || x(L == null ? void 0 : L.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    x == null || x(L == null ? void 0 : L.Always);
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
                (D == null || D(p),
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
                var f;
                if (b == null) return;
                var g =
                  (f = b == null ? void 0 : b.cast(Number(a))) != null
                    ? f
                    : b == null
                      ? void 0
                      : b.Default;
                (A == null || A(g),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(g !== b.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!a,
                );
                return;
              case "defaultNotificationToneId": {
                var h;
                if (b == null) return;
                var y =
                  (h = b == null ? void 0 : b.cast(Number(a))) != null
                    ? h
                    : b == null
                      ? void 0
                      : b.Default;
                T == null || T(y);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var C;
                if (b == null) return;
                var v =
                  (C = b == null ? void 0 : b.cast(Number(a))) != null
                    ? C
                    : b == null
                      ? void 0
                      : b.Default;
                I == null || I(v);
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
              case "mediaUploadQuality":
                B(a);
                return;
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
              case "mediaAutoDownloadQuality":
                o(
                  "WAWebMediaAutoDownloadQualitySync",
                ).applySyncedMediaAutoDownloadQuality(a);
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
              O({
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
              O({
                chatJid: e,
                field: n,
                mutation: { field: "doodle", value: a },
              });
              return;
            case "wallpaperId":
              typeof a == "number" &&
                O({
                  chatJid: e,
                  field: n,
                  mutation: { field: "wallpaperSolid", wallpaperId: a },
                });
              return;
            case "stockWallpaperImageId":
              O({
                chatJid: e,
                field: n,
                mutation: { field: "wallpaperStock", rawValue: a },
              });
              return;
            default:
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function O(e) {
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
    function B(e) {
      var t = (function (e) {
        return e ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD
          ? !0
          : e ===
              o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$SettingsSyncAction$MediaQualitySetting.STANDARD
            ? !1
            : null;
      })(
        o(
          "WAWebProtobufSyncAction.pb",
        ).SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(
          Number(e),
        ),
      );
      if (t == null) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[settings-sync] Invalid media upload quality setting: ",
              "",
            ])),
          String(e),
        );
        return;
      }
      r("WAWebChatPreferenceCollection")
        .getDefault()
        .set({ hdMediaEnabled: t, hdMediaQualityChosen: !0 });
    }
    l.SettingsBridgeApi = F;
  },
  98,
);
