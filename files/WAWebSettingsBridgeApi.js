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
    "WAWebWindowsHybridBridgeInitiator",
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
      R,
      L = (e = n("cr:12510")) != null ? e : {},
      E = L.NotificationToneOption,
      k = (s = n("cr:12511")) != null ? s : {},
      I = k.ShowNotificationBannerOption,
      T = (u = n("cr:12512")) != null ? u : {},
      D = T.TaskbarNotificationOption,
      x = (c = n("cr:7293")) != null ? c : {},
      $ = x.setNotificationBannerSetting,
      P = x.setNotificationToneGroupSetting,
      N = x.setNotificationToneSetting,
      M = x.setStatusReactionsSetting,
      w = x.setTaskbarNotificationSetting,
      A = (d = n("cr:12513")) != null ? d : {},
      F = A.setIsSystemTrayEnabled,
      O = (m = n("cr:17219")) != null ? m : {},
      B = O.getWindowsBridge,
      W = (p = n("cr:7293")) != null ? p : {},
      q = W.setNotificationToneStatusSetting,
      U = {
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
                if (B != null) {
                  var a;
                  (a = B(
                    r("WAWebWindowsHybridBridgeInitiator")
                      .WAWebSettingsBridgeApi,
                  )) == null ||
                    (a = a.systemIntegrationsBridge) == null ||
                    a.updateStartupTask(!!n);
                }
                return;
              }
              case "minimizeToTray":
                F != null && (F == null || F(!!n));
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
                if (u == null || I == null) return;
                switch (u) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    $ == null || $(I == null ? void 0 : I.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    $ == null || $(I == null ? void 0 : I.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    $ == null || $(I == null ? void 0 : I.Always);
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
                if (c == null || D == null) return;
                switch (c) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER:
                    w == null || w(D == null ? void 0 : D.Never);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode
                    .ONLY_WHEN_APP_IS_OPEN:
                    w == null || w(D == null ? void 0 : D.OnlyWhenAppIsOpen);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS:
                    w == null || w(D == null ? void 0 : D.Always);
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
                (M == null || M(m),
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
                if (E == null) return;
                var C =
                  (p = E == null ? void 0 : E.cast(Number(n))) != null
                    ? p
                    : E == null
                      ? void 0
                      : E.Default;
                (q == null || q(C),
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setGlobalStatusSoundsEnabled(C !== E.None));
                return;
              }
              case "shouldPlaySoundForCallNotification":
                o("WAWebMuteCollection").MuteCollection.setGlobalCallRingtone(
                  !!n,
                );
                return;
              case "defaultNotificationToneId": {
                var b;
                if (E == null) return;
                var v =
                  (b = E == null ? void 0 : E.cast(Number(n))) != null
                    ? b
                    : E == null
                      ? void 0
                      : E.Default;
                N == null || N(v);
                return;
              }
              case "groupDefaultNotificationToneId": {
                var S;
                if (E == null) return;
                var R =
                  (S = E == null ? void 0 : E.cast(Number(n))) != null
                    ? S
                    : E == null
                      ? void 0
                      : E.Default;
                P == null || P(R);
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
                L.set(
                  "wallpaperValue",
                  o("WAWebChatThemeValue").wallpaperValueWithDoodle(
                    L.wallpaperValue,
                    !!n,
                  ),
                );
                return;
              }
              case "chatThemeId": {
                var k = r("WAWebChatPreferenceCollection").getDefault(),
                  T = k.chatThemeValue,
                  x =
                    typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                  A = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields(
                    {
                      chatThemeId: x,
                      colorSchemeId:
                        (T == null ? void 0 : T.colorSchemeId) != null
                          ? T.colorSchemeId
                          : null,
                    },
                    T,
                  );
                (x != null &&
                  A.chatThemeId == null &&
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
                  k.set("chatThemeValue", A));
                return;
              }
              case "colorSchemeId": {
                var O = r("WAWebChatPreferenceCollection").getDefault(),
                  W = O.chatThemeValue,
                  U =
                    typeof n == "string" ? r("WAWebNormalizeThemeId")(n) : null,
                  V = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields(
                    {
                      chatThemeId:
                        (W == null ? void 0 : W.chatThemeId) != null
                          ? W.chatThemeId
                          : null,
                      colorSchemeId: U,
                    },
                    W,
                  );
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
                  O.set("chatThemeValue", V));
                return;
              }
              case "stockWallpaperImageId": {
                var H = r("WAWebChatPreferenceCollection").getDefault(),
                  G = H.wallpaperValue;
                H.set(
                  "wallpaperValue",
                  o("WAWebChatThemeValue").wallpaperValueFromFlat({
                    wallpaper: null,
                    showDoodle: o(
                      "WAWebChatThemeValue",
                    ).doodleFromWallpaperValue(G),
                    stockWallpaperImageId: typeof n == "string" ? n : null,
                  }),
                );
                return;
              }
              case "fontSize": {
                typeof n == "number" &&
                  r("WAWebSettingsSyncEventEmitter").trigger("applyZoom", n);
                return;
              }
              case "mediaUploadQuality": {
                var z = o(
                  "WAWebProtobufSyncAction.pb",
                ).SyncActionValue$SettingsSyncAction$MediaQualitySetting.cast(
                  Number(n),
                );
                if (z == null) {
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
                var j = r("WAWebChatPreferenceCollection").getDefault();
                switch (z) {
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD:
                    j.set("hdMediaEnabled", 1);
                    break;
                  case o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                    .STANDARD:
                    j.set("hdMediaEnabled", 0);
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
                    f = o("WAWebChatThemeValue").chatThemeValueFromSyncedFields(
                      {
                        chatThemeId: n === "chatThemeId" ? m : p,
                        colorSchemeId: n === "colorSchemeId" ? m : _,
                      },
                      d,
                    );
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
                if (h != null) {
                  var y = h.wallpaperValue,
                    L = o("WAWebChatThemeValue").isWallpaperOverride(y)
                      ? y
                      : r("WAWebChatPreferenceCollection").getDefault()
                          .wallpaperValue;
                  h.setWallpaperValue(
                    o("WAWebChatThemeValue").wallpaperValueWithDoodle(L, a),
                  );
                }
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
            case "stockWallpaperImageId": {
              try {
                var E = o("WAWebWidFactory").createWid(e),
                  k = E.isLid()
                    ? o(
                        "WAWebChatCollection",
                      ).ChatCollection.getChatByAccountLid(E)
                    : o("WAWebChatCollection").ChatCollection.get(E);
                if (k != null) {
                  var I,
                    T,
                    D = typeof a == "string" && a !== "" ? a : null,
                    x = k.wallpaperValue,
                    $ = r("WAWebChatPreferenceCollection").getDefault()
                      .wallpaperValue,
                    P = o("WAWebChatThemeValue").isWallpaperOverride(x) ? x : $,
                    N =
                      (I =
                        (T = o("WAWebChatThemeValue").doodleFromWallpaperValue(
                          P,
                        )) != null
                          ? T
                          : o("WAWebChatThemeValue").doodleFromWallpaperValue(
                              $,
                            )) != null
                        ? I
                        : !0;
                  k.setWallpaperValue(
                    D == null
                      ? null
                      : o("WAWebChatThemeValue").wallpaperValueFromFlat({
                          wallpaper: null,
                          showDoodle: N,
                          stockWallpaperImageId: D,
                        }),
                  );
                }
              } catch (t) {
                throw (
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[settings-sync] Failed to set stock wallpaper for ",
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
            default:
              o("WALogger").WARN(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
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
    l.SettingsBridgeApi = U;
  },
  98,
);
