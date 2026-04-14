__d(
  "WAWebApp.react",
  [
    "cx",
    "fbt",
    "invariant",
    "Promise",
    "WAComms",
    "WALogger",
    "WAMemoizeOne",
    "WAPromiseTimeout",
    "WAShiftTimer",
    "WAWeb-moment",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAccountLinkingAPI",
    "WAWebAlarm",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebAppMutex",
    "WAWebAppRootInteractionContext.react",
    "WAWebAppScreen",
    "WAWebAppUI",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebBrokerGlobalAppState",
    "WAWebCacheStorageOpenFailedPopup.react",
    "WAWebChatPreferenceCollection",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConnModel",
    "WAWebCrashlog",
    "WAWebDeepLinkClickWamEvent",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebErrorBoundaryPopup.react",
    "WAWebEventsWaitForEvent",
    "WAWebEventsWaitForMain",
    "WAWebExternalLink.react",
    "WAWebHardRefreshModal.react",
    "WAWebKeyboardContext",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLaunchSocket",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebLoggerImpl",
    "WAWebLogoutReasonConstants",
    "WAWebMediaWorkerProxy",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPathfinder.react",
    "WAWebPopover.react",
    "WAWebPreLoginApiCmds",
    "WAWebPrivacyModeContext",
    "WAWebPwaEventListeners",
    "WAWebPwaManifest",
    "WAWebRobotoVariableFontLoadable",
    "WAWebSWBusInit",
    "WAWebSafariTakeover",
    "WAWebSocketModel",
    "WAWebStorageCmd",
    "WAWebStorageQuotaExceededPopup.react",
    "WAWebStreamModel",
    "WAWebStylesEnv",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUnexpectedFatalErrorModal.react",
    "WAWebUpdater",
    "WAWebUpdaterUpdatePoll",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsScreenLock",
    "WAWebUserPrefsStore",
    "WAWebWAWCStorage",
    "WAWebWallpaper",
    "WAWebWamAppLaunchReporter",
    "WAWebWamFingerprintReporter",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamPageLoadReporter",
    "WDSContextualLayer.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "isStringNullOrEmpty",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e,
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
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M = N || (N = o("react")),
      w = N,
      A = w.Component,
      F = w.createRef,
      O = r("requireDeferred")("WAWebEmojiAssetLoader").__setRef(
        "WAWebApp.react",
      ),
      B = r("requireDeferred")("WAWebEmojiAssetLoaderConfig").__setRef(
        "WAWebApp.react",
      ),
      W = r("requireDeferred")("WAWebMainWrapper").__setRef("WAWebApp.react"),
      q = (e = n("cr:17219")) != null ? e : {},
      U = q.getWindowsBridge;
    n("WAWebSWBusInit");
    var V = window.gc;
    if (typeof V == "function")
      try {
        var H = !1,
          G = function () {
            H || V.call(window);
          };
        ((G.toString = function () {
          return "function gc() { [native code] }";
        }),
          (window.gc = G),
          o("WAWebABPropsCache")
            .waitForABPropConfigsReady()
            .then(function () {
              o("WAWebABProps").getABPropConfigValue(
                "web_anr_noop_gc_enabled",
              ) && (H = !0);
            }));
      } catch (e) {}
    var z =
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy,
        ) === 1,
      j = [
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdErrorDuringBootstrap,
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout,
        o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout,
        o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus,
        o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError,
      ],
      K;
    function Q() {
      return K != null && K.hasPendingActions();
    }
    function X(e) {
      var t = e.cmdAndData,
        n = e.isExternal,
        r = e.sessionId,
        a = t.data,
        i = t.resultType;
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "main:execApiCmd:",
              ", external=",
              "",
            ])),
          i,
          n,
        ),
        K != null || c(0, 56382),
        i === "ADVERTISE" || i === "MANAGE_ADS" || i === "OPEN_CATALOG"
          ? !1
          : K.execApiCmd({ cmdData: t, isExternal: n, sessionId: r })
      );
    }
    function Y(e) {
      for (var t = e; t; ) {
        var n,
          r =
            t instanceof HTMLElement &&
            ((n = t.dataset) == null ? void 0 : n.nohandle);
        if (r) return !1;
        t = t.parentElement;
      }
      return !0;
    }
    function J() {
      (o("WAWebSocketModel").Socket.summary(),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Focus at time of upload:",
            ])),
        ));
      try {
        o("WAWebUim").UIM.pprint(!0);
      } catch (e) {
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "UIM Print Failed!",
            ])),
        );
      }
      return {
        platform: o("WAWebConnModel").Conn.platform,
        ref: o("WAWebConnModel").Conn.ref,
      };
    }
    var Z = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.contextMenuRef = F()),
            (t.animate = !0),
            (t.state = {
              mode: o("WAWebStreamModel").Stream.mode,
              anotherSession: !1,
              takingOver: !1,
              isUnsupportedTakeover: !1,
              apiCmd: void 0,
              locale: r("WAWebL10N").getLocale(),
              mainLoaded: !1,
              theme: o("WAWebThemeContext").getTheme(),
              systemThemeMode: o("WAWebUserPrefsGeneral").getSystemThemeMode(),
              isKeyboardUser: !1,
              initialLoadState: { initialLoadReady: !1 },
              startLogout: !1,
              stayInSync: !o("WAWebSocketModel").Socket.hasSynced,
              screenLocked: !1,
            }),
            (t.$8 = function (e) {
              t.state.isKeyboardUser !== e && t.setState({ isKeyboardUser: e });
            }),
            (t.$13 = {
              up: function () {
                return t.$8(!0);
              },
              down: function () {
                return t.$8(!0);
              },
              left: function () {
                return t.$8(!0);
              },
              right: function () {
                return t.$8(!0);
              },
              home: function () {
                return t.$8(!0);
              },
              end: function () {
                return t.$8(!0);
              },
              "command+up": function () {
                return t.$8(!0);
              },
              "command+down": function () {
                return t.$8(!0);
              },
              pageUp: function () {
                return t.$8(!0);
              },
              pageDown: function () {
                return t.$8(!0);
              },
              tab: function () {
                return t.$8(!0);
              },
              "shift+tab": function () {
                return t.$8(!0);
              },
              "shift+?": function () {
                return t.$8(!0);
              },
            }),
            (t.$2 = new (o("WAShiftTimer").ShiftTimer)(function (e) {
              e !== t.state.mode && t.setState({ mode: e });
            })),
            (t.$3 = function () {
              var e,
                n = o("WAWebStreamModel").Stream.mode;
              if (
                ((e = o("WAWebWamAppLaunchReporter").getAppLaunchReporter()) ==
                  null ||
                  e.initializeAppLaunchWamEvent(
                    t.state.mode === o("WAWebStreamModel").StreamMode.SYNCING,
                  ),
                t.state.mode === o("WAWebStreamModel").StreamMode.MAIN)
              ) {
                t.$2.forceRunNow(n);
                return;
              }
              t.$2.onOrBefore(0, n);
            }),
            (t.$16 = function (e) {
              (e.detail !== 0 && t.$8(!1),
                o("WAWebCmd").Cmd.windowMouseDown(e));
            }),
            (t.$17 = function (e) {
              o("WAWebCmd").Cmd.windowClick(e);
            }),
            (t.$7 = function (e) {
              var n = e.target;
              if (n && n.nodeName === "A") {
                var a = n.getAttribute("href");
                if (!r("isStringNullOrEmpty")(a) && Y(n)) {
                  var i = o("WAWebApiParse").parseAPICmd(a);
                  if (
                    !(
                      i.resultType === "INVALID" ||
                      i.resultType === "ADVERTISE" ||
                      i.resultType === "MANAGE_ADS" ||
                      i.resultType === "PAYMENT_LINK" ||
                      i.resultType === "OPEN_CATALOG"
                    )
                  ) {
                    i.resultType;
                    var l = t.$15();
                    t.$14() &&
                      X({ cmdAndData: i, isExternal: !1, sessionId: l }) &&
                      (t.$18(i, l), e.preventDefault());
                  }
                }
              }
            }),
            (t.$18 = function (e, t) {
              if (e.resultType === o("WAWebApi").APICmd.GROUP_INVITE)
                new (o("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                  deepLinkHasPhoneNumber: !1,
                  deepLinkHasText: !0,
                  deepLinkRequirePinEntry: !1,
                }).commit();
              else if (e.resultType === o("WAWebApi").APICmd.MSG_SEND) {
                if (!r("isStringNullOrEmpty")(e.data.username)) return;
                var n = e.data.phone != null,
                  a = e.data.text != null;
                new (o("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                  deepLinkHasPhoneNumber: n,
                  deepLinkHasText: a,
                  deepLinkSessionId: t,
                  deepLinkRequirePinEntry: !1,
                }).commit();
              } else
                e.resultType === o("WAWebApi").APICmd.CATALOG
                  ? new (o("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)(
                      {
                        deepLinkHasPhoneNumber: !0,
                        deepLinkHasText: !1,
                        deepLinkRequirePinEntry: !1,
                      },
                    ).commit()
                  : e.resultType === o("WAWebApi").APICmd.PRODUCT &&
                    new (o("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)(
                      {
                        deepLinkHasPhoneNumber: !0,
                        deepLinkHasText: !1,
                        deepLinkRequirePinEntry: !1,
                      },
                    ).commit();
            }),
            (t.$12 = function (e) {
              if (t.state.theme !== e) {
                var n = t.$1(e);
                for (var a of o("WAWebThemeContext").THEME_ASSETS[n])
                  o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(
                    a,
                    o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD,
                    !1,
                  );
                var i = r("WAWebChatPreferenceCollection").get(
                  "defaultPreference",
                );
                if (
                  i &&
                  o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER !== i.wallpaper
                ) {
                  var l = o("WAWebWallpaper").toggleWallpaperColor(
                    i.wallpaper,
                    t.state.theme,
                  );
                  i.set("wallpaper", l);
                }
                (o("WAWebThemeContext").setTheme(e), t.setState({ theme: e }));
              }
            }),
            (t.$1 = function (e) {
              return e === "light"
                ? o("WAWebConnModel").Conn.isSMB
                  ? "smbLight"
                  : "lightRefreshed"
                : e === "dark"
                  ? o("WAWebConnModel").Conn.isSMB
                    ? "smbDark"
                    : "darkRefreshed"
                  : e;
            }),
            (t.$19 = function (e) {
              (o("WAWebUserPrefsGeneral").setSystemThemeMode(e),
                t.setState({ systemThemeMode: e }));
            }),
            (t.$20 = function () {
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] mdReloadPageOnTakeOver",
                  ])),
              ),
                window.location.reload());
            }),
            (t.$21 = function () {
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "DebouncedLoadingScreen: Ready for main screen",
                  ])),
              ),
                t.setState({ stayInSync: !1 }));
            }),
            (t.$22 = function () {
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] mdReloadPageWithUnsupportedTakeOver",
                  ])),
              ),
                window.location.reload());
            }),
            (t.$23 = r("WAMemoizeOne")(function (e) {
              var n = e.systemThemeMode,
                r = e.theme;
              return {
                theme: r,
                setTheme: t.$12,
                systemThemeMode: n,
                setSystemThemeMode: t.$19,
              };
            })),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            var e = this;
            (o(
              "WAWebCrashlog",
            ).registerCrashlogUploadInformationalLoggingFunction(J),
              o("WAWebPwaEventListeners").registerPwaDisplayModeListener(),
              o("WAWebPwaEventListeners").registerPwaInstallListener(),
              o("WAWebPwaManifest").updatePwaManifestOnMacOS(),
              o("WAWebMiscGatingUtils").checkDeviceIdTestAbProp(),
              r("WAWebAppMutex").setShouldLaunchSocket(!z),
              z &&
                o("WAWebLaunchSocket").launchSocket(
                  r("WAWebAppMutex").waitForCompletion(),
                ));
            var t = this.state.theme;
            (o("WAWebThemeContext").applyThemeToUI(t),
              oe().then(function (n) {
                o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(n);
                var r = e.$1(t);
                o("WAWebAssetLoaderSingleton").AssetLoader.loadInitialAssets(
                  o("WAWebThemeContext").THEME_ASSETS[r],
                );
              }),
              ne()
                .then(function () {
                  if (e.state.anotherSession) {
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[md takeover] session detected, abort main load",
                        ])),
                    );
                    return;
                  }
                  (o("WAWebEventsWaitForMain").resolveMainLoaded(),
                    e.setState({ mainLoaded: !0 }));
                })
                .then(function () {
                  return (P || (P = n("Promise"))).all([
                    O.load(),
                    B.load(),
                    oe(),
                  ]);
                })
                .then(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = e[2];
                  (o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(r),
                    o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(
                      t.emojiAssetMapCreator(n()),
                    ),
                    o(
                      "WAWebEmojiAssetLoaderCompletionTracker",
                    ).emojiCompletionTracker.resetPreloadState(),
                    o(
                      "WAWebEmojiAssetLoaderCompletionTracker",
                    ).emojiCompletionTracker.beginPreloadFallback());
                }));
            var a = this.props.listeners;
            if (
              (a.add(
                o("WAWebCmd").Cmd,
                "initial_load_ready_from_bridge",
                function () {
                  (e.setState({
                    initialLoadState: {
                      initialHistorySyncComplete: o(
                        "WAWebUserPrefsHistorySync",
                      ).getInitialHistorySyncComplete(),
                      initialLoadReady: !0,
                    },
                  }),
                    o("WAWebWamFingerprintReporter").logFingerprintToWam());
                },
              ),
              a.add(
                o("WAWebStorageCmd").StorageCmd,
                "storage_not_enough_space",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o("WAWebModalManager").ModalManager.existsAsync()) ||
                    o("WAWebModalManager").ModalManager.open(
                      M.jsx(r("WAWebStorageQuotaExceededPopup.react"), {}),
                      { blockClose: !0 },
                    );
                }),
              ),
              a.add(
                o("WAWebStorageCmd").StorageCmd,
                "cache_storage_open_failed",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o("WAWebModalManager").ModalManager.existsAsync()) ||
                    o("WAWebModalManager").ModalManager.open(
                      M.jsx(r("WAWebCacheStorageOpenFailedPopup.react"), {}),
                      { blockClose: !0 },
                    );
                }),
              ),
              a.add(
                o("WAWebCmd").Cmd,
                "account_temporarily_banned_from_bridge",
                function (t) {
                  e.setState({ temporaryBan: t });
                },
              ),
              a.add(
                o("WAWebCmd").Cmd,
                "offline_delivery_end_from_bridge",
                function () {
                  (o("WAWebMediaWorkerProxy").prewarmMediaWasmWorker(
                    "mp4RepairMux",
                  ),
                    o("WAWebAccountLinkingAPI").checkAndTriggerUOOMMutation());
                },
              ),
              a.add(
                o("WAWebCmd").Cmd,
                "service_unavailable_503_from_bridge",
                function () {
                  e.setState({ serviceUnavailable: !0 });
                },
              ),
              a.add(
                o("WAWebCmd").Cmd,
                "starting_logout_from_bridge",
                function () {
                  e.setState({ startLogout: !0 });
                },
              ),
              a.add(
                o("WAWebCmd").Cmd,
                "unexpected_logout_modal_from_bridge",
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (
                        !(yield o(
                          "WAWebModalManager",
                        ).ModalManager.existsAsync())
                      ) {
                        if (e == null || !j.includes(e)) {
                          o("WAWebSocketModel").Socket.logout(e);
                          return;
                        }
                        o("WAWebModalManager").ModalManager.open(
                          M.jsx(r("WAWebUnexpectedFatalErrorModal.react"), {
                            reason: e,
                            children: u._(
                              /*BTDS*/ "Unexpected Logout detected. Please submit a bug report.",
                            ),
                          }),
                          { blockClose: !0 },
                        );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOfflineStartT(),
              a.add(window, "beforeunload", function () {
                (o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab !=
                  null &&
                  o(
                    "WAWebExternalLink.react",
                  ).isOpeningDeeplinkInCurrentTab()) ||
                  r("WAWebAppMutex").unloadMutex();
              }),
              a.add(window, "unload", function () {
                (o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab !=
                  null &&
                  o(
                    "WAWebExternalLink.react",
                  ).isOpeningDeeplinkInCurrentTab()) ||
                  r("WAWebAppMutex").unloadMutex();
              }),
              a.add(window, "storage", function (t) {
                var n = r("WAWebAppMutex").storagePong(t);
                n &&
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[md takeover] tab taken over. stopping comms",
                      ])),
                  ),
                  o("WAComms").getComms() &&
                    o("WAComms").closeSocketAndPreventRetry(),
                  o("WAWebLoggerImpl").Logger.onTakeOver(),
                  e.setState({ takingOver: !1, anotherSession: !0 }),
                  e.$2.cancel());
              }),
              a.add(o("WAWebStreamModel").Stream, "change:mode", this.$3),
              a.add(o("WAWebCmd").Cmd, "open_lock_screen_modal", function () {
                e.setState({ screenLocked: !0 });
              }),
              a.add(
                o("WAWebCmd").Cmd,
                "correct_passcode_lock_screen",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  e.setState({ screenLocked: !1, stayInSync: !1 });
                }),
              ),
              o("WAWebUserPrefsScreenLock").getScreenLockEnabled() &&
                o("WAWebUserPrefsInfoStore").waNoiseInfo
                  .cachedPasscodeDerivedKey == null &&
                this.setState({ screenLocked: !0 }),
              r("WAWebURLUtils").canMuckHistory())
            ) {
              var i = o("WAWebApiParse").parseAPICmd(window.location.href);
              if (
                i.resultType !== o("WAWebApi").APICmd.INVALID &&
                o("WAWebPreLoginApiCmds").PRE_LOGIN_API_CMDS.includes(
                  i.resultType,
                )
              ) {
                var l;
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "doing maybeExecApiCmd (pre-login)",
                    ])),
                );
                var s = (l = i.data) == null ? void 0 : l.url;
                (this.$4(i),
                  window.history.replaceState({}, "", s != null ? s : "/"));
              } else
                o("WAWebABPropsCache")
                  .waitForABPropConfigsReady()
                  .then(function () {
                    if (
                      i.resultType !== o("WAWebApi").APICmd.INVALID &&
                      i.resultType !== o("WAWebApi").APICmd.ADVERTISE &&
                      i.resultType !== o("WAWebApi").APICmd.MANAGE_ADS &&
                      i.resultType !== o("WAWebApi").APICmd.MESSAGE_YOURSELF &&
                      i.resultType !==
                        o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING &&
                      i.resultType !==
                        o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL &&
                      i.resultType !==
                        o("WAWebApi").APICmd.BIZ_BROADCAST_HOME &&
                      i.resultType !==
                        o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE &&
                      i.resultType !== o("WAWebApi").APICmd.STATUS_POST &&
                      i.resultType !== o("WAWebApi").APICmd.PAYMENT_LINK &&
                      i.resultType !== o("WAWebApi").APICmd.OPEN_CATALOG &&
                      i.resultType !==
                        o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA &&
                      i.resultType !==
                        o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING &&
                      i.resultType !== o("WAWebApi").APICmd.NEW_CHAT &&
                      i.resultType !== o("WAWebApi").APICmd.NEW_CALL &&
                      i.resultType !== o("WAWebApi").APICmd.CHAT_OPEN &&
                      i.resultType !== o("WAWebApi").APICmd.APP_OPEN &&
                      i.resultType !== o("WAWebApi").APICmd.AVATAR_STICKERPACK
                    ) {
                      var t,
                        n = i.data.url;
                      (((t = i.data) == null ? void 0 : t.url) != null &&
                        delete i.data.url,
                        o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "doing maybeExecApiCmd (post-abprop-init)",
                            ])),
                        ),
                        e.$4(i),
                        window.history.replaceState(
                          {},
                          "",
                          n != null ? n : "/",
                        ));
                    }
                  });
            }
            (a.add(r("WAWebL10N"), "locale_change", function () {
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[app] componentDidMount:rerenderUI locale change",
                  ])),
              ),
                o("WAWebClock").Clock.initIs24HourBasedOnLocale(),
                (e.animate = !1),
                e.setState({
                  locale:
                    r("WAWebL10N").getLocale() +
                    "#" +
                    r("WAWeb-moment").locale(),
                }));
            }),
              this.$5(),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[app] componentDidMount:visibilityState: ",
                    "",
                  ])),
                document.visibilityState,
              ),
              document.prerendering === !0
                ? (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[app]  prerendering: waiting for page to activate",
                      ])),
                  ),
                  r("WAWebEventsWaitForEvent")(document, "prerenderingchange")
                    .catch(function () {
                      o("WALogger").LOG(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[app] prerendering: prerenderingchange err",
                          ])),
                      );
                    })
                    .finally(function () {
                      (o("WALogger").LOG(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[app]  prerendering: page is active",
                          ])),
                      ),
                        e.$6(0));
                    }))
                : document.visibilityState !== "visible"
                  ? o("WAPromiseTimeout")
                      .promiseTimeout(
                        r("WAWebEventsWaitForEvent")(
                          document,
                          "visibilitychange",
                        ),
                        5e3,
                      )
                      .then(function () {
                        return e.$6(0);
                      })
                      .catch(function () {
                        return e.$6(0);
                      })
                  : this.$6(0),
              this.props.listeners.add(window, "click", this.$7, {
                capture: !0,
              }),
              this.props.listeners.add(window, "blur", function () {
                e.$8(!1);
              }),
              o("WAWebUpdaterUpdatePoll").updatePoll.poll(
                o("WAWebUpdaterUpdatePoll").checkForUpdates,
              ),
              this.$9(),
              this.$10(),
              this.$11(),
              (document.createElement = (function (e) {
                return function (t, n) {
                  if (
                    (n === void 0 && (n = {}), t.toLowerCase() === "iframe")
                  ) {
                    o("WALogger").WARN(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[iframe] added sandbox attrs for security",
                        ])),
                    );
                    var r = e(t, n);
                    return (
                      (r.sandbox =
                        "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads"),
                      o("WAWebUA").UA.hasCredentiallessIframeSupport &&
                        (o("WALogger").WARN(
                          I ||
                            (I = babelHelpers.taggedTemplateLiteralLoose([
                              "[iframe] added credentialless attr",
                            ])),
                        ),
                        (r.credentialless = !0)),
                      r
                    );
                  }
                  return e(t, n);
                };
              })(document.createElement.bind(document))),
              this.props.listeners.add(
                r("WAWebSystemTheme"),
                "system_theme_change",
                function (t) {
                  e.state.systemThemeMode && e.$12(t);
                },
              ),
              a.add(
                o("WAWebStreamModel").Stream,
                "change:isHardRefresh",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  !r("WAWebEnvironment").isWindows &&
                    o("WAWebStreamModel").Stream.isHardRefresh &&
                    o("WAWebAppScreen").getScreen(e.state) ===
                      o("WAWebAppScreen").AppScreen.MAIN &&
                    !(yield o(
                      "WAWebModalManager",
                    ).ModalManager.existsAsync()) &&
                    o("WAWebModalManager").ModalManager.open(
                      M.jsx(r("WAWebHardRefreshModal.react"), {}),
                    );
                }),
              ));
            var c = document.getElementById("wa_web_initial_startup");
            c != null && c.parentNode && c.parentNode.removeChild(c);
          }),
          (a.$10 = function () {
            var e;
            if (
              ((e = document.body) == null || e.classList.add("color-refresh"),
              o("WAWebConnModel").Conn.isSMB)
            ) {
              var t;
              (t = document.body) == null || t.classList.add("smb-colors");
            }
          }),
          (a.$11 = function () {
            var e = o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
              t = !1;
            if (
              ((e === 3 ||
                (e === 2 && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) ||
                (e === 1 &&
                  (r("WAWebEnvironment").isWindows ||
                    o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS))) &&
                (t = !0),
              t)
            ) {
              var n;
              (o("WAWebRobotoVariableFontLoadable").requireRobotoVariableFont(),
                (n = document.body) == null || n.classList.add("roboto-font"));
            } else {
              var a;
              (a = document.body) == null || a.classList.remove("roboto-font");
            }
          }),
          (a.componentDidUpdate = function (t, n) {
            (n.anotherSession === !0 && this.state.anotherSession === !1
              ? r("WAWebWAWCStorage")
                  .openDB()
                  .catch(function (e) {
                    o("WALogger").WARN(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to open indexeddb: ",
                          "",
                        ])),
                      e,
                    );
                  })
              : n.anotherSession === !1 &&
                this.state.anotherSession === !0 &&
                r("WAWebWAWCStorage")
                  .idb()
                  .then(function (e) {
                    ((r("WAWebBrokerGlobalAppState").takeOver = !0),
                      e.close(),
                      o("WALogger").LOG(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] closed due to take over",
                          ])),
                      ));
                  })
                  .catch(r("WAWebNoop")),
              this.$4(this.state.apiCmd),
              this.state.mode !== o("WAWebStreamModel").StreamMode.MAIN &&
                (this.animate = !0),
              this.$9());
          }),
          (a.componentWillUnmount = function () {
            this.$2.cancel();
          }),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this;
                if (
                  (t === void 0 && (t = !1),
                  o("WAWebUA").UA.isLocalStorageBroken)
                ) {
                  var a = yield o("WAWebSafariTakeover").isAnotherTabActive();
                  if (a) {
                    (o("WAWebLoggerImpl").Logger.onTakeOver(),
                      this.setState({ isUnsupportedTakeover: !0 }));
                    try {
                      o("WAComms").stopComms();
                    } catch (e) {}
                    return;
                  }
                }
                (o("WAWebSafariTakeover").setTabActive(),
                  t &&
                    o("WAWebUpdater").Updater.shouldForceUpdateOnTakeOver() &&
                    o("WAWebUpdater").Updater.restart());
                var i = t
                    ? r("WAWebAppMutex").takeoverLocal(e)
                    : r("WAWebAppMutex").init(e),
                  l =
                    (yield i.catch(function (e) {
                      return (n.setState({ takingOver: !0 }), n.$6(e, !0));
                    })) === !0;
                ((o("WAWebLoggerImpl").Logger.isTakeOver =
                  o("WAWebLoggerImpl").Logger.isTakeOver || l),
                  this.setState(function (e) {
                    return {
                      takingOver: !1,
                      anotherSession: e.anotherSession || l,
                    };
                  }));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = function (t) {
            if (
              t &&
              !(
                t.resultType === "ADVERTISE" ||
                t.resultType === "MANAGE_ADS" ||
                t.resultType === "OPEN_CATALOG"
              )
            ) {
              if ((t.resultType, this.$14())) {
                var e = this.$15();
                (X({ cmdAndData: t, isExternal: !0, sessionId: e }),
                  this.state.apiCmd != null && this.setState({ apiCmd: null }));
                return;
              }
              t !== this.state.apiCmd && this.setState({ apiCmd: t });
            }
          }),
          (a.$14 = function () {
            return (
              K != null &&
              o("WAWebAppScreen").getScreen(this.state) ===
                o("WAWebAppScreen").AppScreen.MAIN
            );
          }),
          (a.$9 = function () {
            this.state.mode !== o("WAWebStreamModel").StreamMode.SYNCING &&
              o("WAWebWamPageLoadReporter").logFirstRenderMountTimeOnce();
          }),
          (a.$5 = function () {
            var e = this;
            r("WAWebAlarm").setLocalTimeout(function () {
              (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[app] registerYesterdayTimer:rerenderUI relative timestamps",
                  ])),
              ),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "Local Clock: ",
                      ", Skew: ",
                      "",
                    ])),
                  Date.now(),
                  o("WAWebClock").Clock.getSkew(),
                ),
                o("WAWebCmd").Cmd.midnight(),
                e.$5());
            }, r("WAWeb-moment")().endOf("day").valueOf());
          }),
          (a.$15 = function () {
            return Math.floor(2147483648 * Math.random()).toString();
          }),
          (a.render = function () {
            var e,
              t,
              n = o("WAWebAppScreen").getScreen(this.state),
              a =
                U == null || (e = U()) == null
                  ? void 0
                  : e.systemIntegrationsBridge;
            (a != null &&
              (a.updateCurrentWebAppScreen == null ||
                a.updateCurrentWebAppScreen(n)),
              o("WAWebWamPageLoadReporter").maybeLogInitialScreenRenderStart(
                n,
              ));
            var i = this.state.isKeyboardUser,
              l = o("WAWebAppUI").getAppUI({
                Main: K,
                state: this.state,
                screen: n,
                contextMenuRef: this.contextMenuRef,
                animate: this.animate,
                handleReadyForMainScreen: this.$21,
                mdReloadPageOnTakeOver: this.$20,
                mdReloadPageWithUnsupportedTakeOver: this.$22,
              }),
              s = l.appScreenUI,
              u = l.requiresBackendCheck,
              c = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_aiwn",
                {
                  "app-wrapper-web": !0,
                  "safari-fix": o("WAWebStylesEnv").hasSafariFix,
                  "font-fix": o("WAWebStylesEnv").hasFontFix,
                  "os-mac": o("WAWebStylesEnv").isOSMac,
                  "os-win": o("WAWebStylesEnv").isOSWin,
                  "keyboard-user": i,
                },
                ((t = {}), (t._ap4q = !1), t),
              );
            u && K != null && K.notificationBackend.shutdownAsNeeded();
            var d =
                n === o("WAWebAppScreen").AppScreen.STARTUP ||
                n === o("WAWebAppScreen").AppScreen.SYNCING,
              m = d ? "loading-screen" : this.state.locale,
              p;
            return (
              this.state.systemThemeMode === !0
                ? (p = o("WAWebConnModel").Conn.isSMB
                    ? o("WDSThemes").WDSSMBSystemTheme
                    : o("WDSThemes").WDSSystemTheme)
                : this.state.theme === "dark"
                  ? (p = o("WAWebConnModel").Conn.isSMB
                      ? o("WDSThemes").WDSSMBDarkTheme
                      : o("WDSThemes").WDSDarkTheme)
                  : (p = o("WAWebConnModel").Conn.isSMB
                      ? o("WDSThemes").WDSSMBLightTheme
                      : o("WDSThemes").WDSLightTheme),
              M.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
                value: this.$23({
                  theme: this.state.theme,
                  systemThemeMode: this.state.systemThemeMode,
                }),
                children: M.jsxs(
                  o("WAWebAppRootInteractionContext.react")
                    .WAWebAppRootInteractionContextProvider,
                  {
                    children: [
                      o("WAWebABProps").getABPropConfigValue(
                        "web_pathfinder_logging",
                      ) > 0
                        ? M.jsx(r("WAWebPathfinder.react"), {})
                        : null,
                      M.jsx(r("WAWebKeyboardContext").Provider, {
                        value: {
                          isKeyboardUser: i,
                          setIsKeyboardUser: this.$8,
                        },
                        children: M.jsx(
                          o("WAWebPrivacyModeContext").WAWebPrivacyModeProvider,
                          {
                            children: M.jsx(
                              o("WAWebErrorBoundary.react").ErrorBoundary,
                              {
                                name: "app-wrapper",
                                type: "fatal",
                                fallback: o("WAWebErrorBoundaryPopup.react")
                                  .errorBoundaryPopupFallback,
                                sendLogs: !0,
                                children: M.jsx(o("WAWebUimUie.react").UIE, {
                                  displayName: "App",
                                  uimState: o("WAWebUim").UIMState.INACTIVE,
                                  children: M.jsx(
                                    o("WAWebKeyboardHotKeys.react").HotKeys,
                                    {
                                      handlers: this.$13,
                                      className: c,
                                      xstyle: p,
                                      tabIndex: null,
                                      onMouseDownCapture: this.$16,
                                      onClickCapture: this.$17,
                                      children: M.jsxs(M.Fragment, {
                                        children: [
                                          M.jsx(
                                            o("WAWebPopover.react")
                                              .PopoverPortalBucket,
                                            {},
                                          ),
                                          M.jsx(
                                            o("WDSContextualLayer.react")
                                              .WDSContextualLayer,
                                            {
                                              children: s.map(function (e) {
                                                var t = e.errorBoundaryName,
                                                  n = e.ui;
                                                return M.jsx(
                                                  o("WAWebErrorBoundary.react")
                                                    .ErrorBoundary,
                                                  {
                                                    name: t,
                                                    fallback:
                                                      s.length === 1
                                                        ? o(
                                                            "WAWebErrorBoundaryPopup.react",
                                                          )
                                                            .errorBoundaryPopupFallback
                                                        : void 0,
                                                    children: n,
                                                  },
                                                  t,
                                                );
                                              }),
                                            },
                                          ),
                                        ],
                                      }),
                                    },
                                    m,
                                  ),
                                }),
                              },
                            ),
                          },
                        ),
                      }),
                    ],
                  },
                ),
              })
            );
          }),
          t
        );
      })(A),
      ee = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(Z);
    function te() {
      return M.jsx(ee, {});
    }
    te.displayName = te.name + " [from " + i.id + "]";
    function ne() {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (P || (P = n("Promise"))).all([W.load(), oe()]),
            t = e[0],
            r = e[1];
          (o("WAWebWamPageLoadReporter").mainScriptTimer.start(),
            (K = t(r)),
            o("WAWebWamPageLoadReporter").mainScriptTimer.end());
        })),
        re.apply(this, arguments)
      );
    }
    function oe() {
      return o("WAWebConnModel").Conn.platform
        ? (P || (P = n("Promise"))).resolve(o("WAWebConnModel").Conn.platform)
        : new (P || (P = n("Promise")))(function (e) {
            var t = function () {
              var n = o("WAWebConnModel").Conn.platform;
              n != null &&
                (o("WAWebConnModel").Conn.off("change:platform", t), e(n));
            };
            o("WAWebConnModel").Conn.on("change:platform", t);
          });
    }
    ((l.hasPendingActions = Q), (l.App = te));
  },
  226,
);
