__d(
  "WAWebMain.react",
  [
    "cx",
    "fbt",
    "Promise",
    "WAAbortError",
    "WAGetUserMedia",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebActionListener",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAnimatedEmojiAssetLoader",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebAppContext.react",
    "WAWebAppRatingActiveUsageDays",
    "WAWebAppRatingDialogTrigger",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebBizSmbTosModal.react",
    "WAWebCanonicalUtils",
    "WAWebChatCollection",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceModel",
    "WAWebChatlistPanelWrapper.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCometRouterGating",
    "WAWebComposeBoxHasUnsavedChangesInEditModal",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebConversationWrapper.react",
    "WAWebDeviceCapabilitiesBootstrap",
    "WAWebDrawerCoordination",
    "WAWebDrawerManager",
    "WAWebDrawerManager.react",
    "WAWebDrawerManagerContext",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEligibilityLogging",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiSetup",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebHasBlockingCallState",
    "WAWebIntegrityChallengeGatingUtils",
    "WAWebInternDogfoodingModal.react",
    "WAWebKeyboardEventConstants",
    "WAWebKeyboardManager",
    "WAWebKeyboardShortcutsPopup.react",
    "WAWebKeyboardTopLevelHotKeys.react",
    "WAWebLoggerImpl",
    "WAWebModalManager",
    "WAWebMouseManager",
    "WAWebMsgCollection",
    "WAWebNativeAdsExperimentInfoContext.react",
    "WAWebNavBarCometRouting",
    "WAWebNavBarTypes",
    "WAWebNavigationBar.react",
    "WAWebNoticeModel",
    "WAWebNotificationManager.react",
    "WAWebNux",
    "WAWebODS",
    "WAWebOpenNotificationsSetting",
    "WAWebPageLoadLogging",
    "WAWebPipManager.react",
    "WAWebRobotoVariableFontLoadable",
    "WAWebSafariLimited",
    "WAWebSettingsSyncListener.react",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebStrictMode.react",
    "WAWebThemeContext",
    "WAWebTosModal.react",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUserNoticeModal.react",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWallpaper",
    "WAWebWamAppLaunchReporter",
    "WAWebWamTimeSpentLogger",
    "WDSToastContainerID",
    "asyncToGeneratorRuntime",
    "cr:12406",
    "cr:13156",
    "cr:13438",
    "cr:1347",
    "cr:17163",
    "cr:17194",
    "cr:17219",
    "cr:21198",
    "cr:21265",
    "cr:21419",
    "cr:22855",
    "cr:23046",
    "cr:593",
    "cr:683",
    "gkx",
    "hero-tracing",
    "isNonZeroNumber",
    "justknobx",
    "react",
    "requireDeferred",
    "stylex",
    "useCurrentRoute",
    "useLazyRef",
    "useWAWebABPropConfigValue",
    "useWAWebAdjustableChatListWidth",
    "useWAWebExternalBetaOptIn",
    "useWAWebListener",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react")),
      y = g,
      C = y.useCallback,
      b = y.useContext,
      v = y.useEffect,
      S = y.useRef,
      R = y.useState,
      L = r("requireDeferred")("WAWebIntegrityCheckpointOpener").__setRef(
        "WAWebMain.react",
      ),
      E = (e = n("cr:13156")) == null ? void 0 : e.WAWebWindowsScalingControl,
      k =
        (c = n("cr:13438")) == null
          ? void 0
          : c.WAWebWindowsHybridUserPrefsMigrationControl,
      I = (d = n("cr:17219")) == null ? void 0 : d.getWindowsBridge(),
      T = I == null ? void 0 : I.touchpadFix;
    T == null || T.init();
    function D() {
      o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() ||
        o("WAWebModalManager").ModalManager.existsMedia(function (e) {
          (e && o("WAWebModalManager").ModalManager.closeMedia(),
            window.history.pushState({}, "", window.location.href));
        });
    }
    function x() {
      return (
        o(
          "WAWebComposeBoxHasUnsavedChangesInEditModal",
        ).hasUnsavedChangesInEditModal() ||
        o("WAWebChatCollection").ChatCollection.some(function (e) {
          return e.isComposingWithUnsavedChanges();
        }) ||
        o("WAWebMsgCollection").MsgCollection.hasUnsentMessages() ||
        o("WAWebMsgCollection").MsgCollection.some(function (e) {
          return e.pendingDeleteForMe;
        }) ||
        r("WAWebHasBlockingCallState")()
      );
    }
    var $ = 6e4;
    function P(e, t, r) {
      var a = e ? $ : 0;
      t.current = new AbortController();
      var i = t.current.signal;
      o("WAPromiseLoop")
        .promiseLoop(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  if ((yield o("WAPromiseDelays").delayMs(a), i.aborted))
                    throw new (o("WAAbortError").AbortError)();
                  if (
                    (o("WAWebStreamModel").Stream.markUnavailable(3e4),
                    yield new (f || (f = n("Promise")))(function (e) {
                      r.current = e;
                    }),
                    i.aborted)
                  )
                    throw new (o("WAAbortError").AbortError)();
                  (document.hasFocus() &&
                    o("WAWebStreamModel").Stream.markAvailable(),
                    (a = $));
                } catch (t) {
                  if (t.name === o("WAAbortError").ABORT_ERROR) e();
                  else throw t;
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .finally(function () {
          t.current = null;
        });
    }
    var N = "xrbhvgu-B",
      M = "x1h4ohyg-B",
      w = {
        app: {
          position: "x1n2onr6",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          display: "x78zum5",
          width: "xh8yej3",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x1h3rtpe",
          backgroundRepeat: "x1w3jsh0",
          backgroundPosition: "xf8xn22",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          transformOrigin: "x1g0ag68",
          animationName: "xcgwb2z",
          animationDuration: "x4afe7t",
          animationTimingFunction: "x1alahoq",
          $$css: !0,
        },
        appNoAnimation: { animationName: "x10886xy", $$css: !0 },
        pane: {
          boxSizing: "x9f619",
          position: "x1n2onr6",
          zIndex: "xupqr0c",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          transform: "x17dzmu4",
          "@media (display-mode: standalone)_borderTopWidth": "x1i1dayz",
          "@media (display-mode: standalone)_borderTopStyle": "x2ipvbc",
          "@media (display-mode: standalone)_borderTopColor": "xjdofhw",
          $$css: !0,
        },
        paneWindowsHybrid: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        navbarBorder: {
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        paneOne: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          zIndex: "x12xzxwr",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          "@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
          $$css: !0,
        },
        paneOneWindowsHybrid: { borderStartStartRadius: "xyi3aci", $$css: !0 },
        paneOneDrawer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          zIndex: "x1oy9qf3",
          $$css: !0,
        },
        paneOneDrawerWithNavBar: { marginInlineStart: "xevlxbw", $$css: !0 },
        paneBorderLeft: {
          borderInlineStartWidth: "xpilrb4",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        sidePaneMaxWidth: {
          flex: "x18dvir5",
          width: "xxljpkc",
          maxWidth: "xwfak60",
          $$css: !0,
        },
        rightDrawerIn: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          zIndex: "x1oy9qf3",
          maxWidth: "xwfak60",
          animationDuration: "x5hsz1j",
          animationName: "x17dq4o0",
          animationFillMode: "x10e4vud",
          $$css: !0,
        },
        sidePaneWidthWindowsHybrid: {
          flex: "x1dgx9ea",
          width: "xnnhin0",
          maxWidth: "x1dt7z5j",
          minWidth: "x1ugzxio",
          $$css: !0,
        },
        sidePane3WidthWindowsHybrid: {
          flex: "x18dvir5",
          maxWidth: "xbgkxdc",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "x1v8p93f",
          "@media screen and (max-width: 1300px)_position": "x1xz51pm",
          "@media screen and (max-width: 1300px)_insetInlineEnd": "xupwc73",
          "@media screen and (max-width: 1300px)_width": "xlyzgzq",
          "@media screen and (max-width: 1300px)_maxWidth": "x1roq002",
          "@media screen and (max-width: 1300px)_height": "x1ma46kl",
          $$css: !0,
        },
        chatlistHiddenDuringFullscreen: { visibility: "xlshs6z", $$css: !0 },
      };
    function A(e) {
      var t,
        a,
        i,
        l = e.animate,
        s = b(o("WAWebThemeContext").ThemeContext),
        c = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_roboto",
        ),
        d = !1;
      (c === 3 ||
        (c === 2 && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC) ||
        (c === 1 &&
          (r("WAWebEnvironment").isWindows ||
            o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS))) &&
        (d = !0);
      var f = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_toast",
        ),
        g =
          (n("cr:23046") == null
            ? void 0
            : n("cr:23046").isWindowsHybridEnabled()) === !0;
      (o("WAWebSettingsSyncListener.react").useSettingsSyncListener(),
        v(function () {
          if (
            n("cr:17163") != null &&
            n("cr:17163").shouldShowBrokenHybrid2559Modal()
          ) {
            n("cr:17163") == null || n("cr:17163").showBrokenHybrid2559Modal();
            return;
          }
          if (
            n("cr:17194") != null &&
            n("cr:17163") != null &&
            n("cr:17163").shouldShowHybridRateTheAppPrompt()
          ) {
            o("WAWebModalManager").ModalManager.open(h.jsx(n("cr:17194"), {}));
            return;
          }
        }, []));
      var y = S(null),
        T = S(null),
        x = S(null),
        $ = S(null),
        N = S(null),
        M = S(null),
        A = S(!1),
        B = S(null),
        W = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function () {
            if (document.activeElement === document.body) {
              var e = o("WAWebUim").UIM.Manager.getTop();
              e == null || e.requestFocus();
            }
          });
        }),
        q = R(!1),
        U = q[0],
        V = q[1],
        H = R(!1),
        G = H[0],
        z = H[1],
        j = R(!1),
        K = j[0],
        Q = j[1],
        X = function () {
          W.current.debounce(10);
        },
        Y = o("useWAWebAdjustableChatListWidth").useAdjustableChatListWidth(),
        J = Y.leftDrawerStyle,
        Z = Y.resizeHandle,
        ee = Y.rightDrawerStyle,
        te = r("useCurrentRoute")(),
        ne = R(function () {
          var e = te == null ? void 0 : te.url;
          return e != null
            ? o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(e)
            : o("WAWebNavBarTypes").NavBarItems.Chats;
        }),
        re = ne[0],
        oe = ne[1],
        ae = C(
          function (e) {
            (e !== re &&
              o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
              oe(e));
          },
          [re],
        ),
        ie = C(
          function (e, t) {
            if (
              (o("WAWebDrawerCoordination").closeConflictingDrawer(e, t),
              e === "fullscreen" &&
                (t === "opened"
                  ? Q(!0)
                  : (t === "closed" || t === "replaced") && Q(!1)),
              e === "left" || e === "fullscreen")
            ) {
              if (t === "opened") {
                var n;
                (n = x.current) == null || n.onLeftDrawerOpen();
              } else if (t === "closed") {
                var r;
                ((r = x.current) == null || r.onLeftDrawerClose(),
                  ae(o("WAWebNavBarTypes").NavBarItems.Chats));
              }
            } else
              e === "right" &&
                (t === "opened"
                  ? ((A.current = !1),
                    o("WAWebCmd").Cmd.onPanesWillChange(3),
                    V(!0),
                    z(!0),
                    o("WAWebCmd").Cmd.onPanesDidChange(3))
                  : (t === "closed" || t === "replaced") &&
                    ((A.current = !0), z(!0), V(!1)));
          },
          [ae],
        ),
        le = function () {
          (z(!1), U && A.current && V(!1));
        };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "set_active_nav_bar",
        ae,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_chat",
          C(
            function (e) {
              re === o("WAWebNavBarTypes").NavBarItems.MetaAI &&
                (e == null ? void 0 : e.threadId) == null &&
                (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                ae(o("WAWebNavBarTypes").NavBarItems.Chats));
            },
            [re, ae],
          ),
        ));
      var se = R(0),
        ue = se[0],
        ce = se[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "rerender_app",
        function () {},
      );
      var de = function (t) {
          var e,
            n,
            r,
            a,
            i = !1,
            l =
              (e =
                (n = o(
                  "WAWebDrawerManagerGlobalContext",
                ).getGlobalDrawerManager("left")) == null
                  ? void 0
                  : n.existsDrawer()) != null
                ? e
                : !1,
            s = x.current;
          i = i || (l && !!(s != null && s.containsDOMNode(t)));
          var u =
              (r =
                (a = o(
                  "WAWebDrawerManagerGlobalContext",
                ).getGlobalDrawerManager("mid")) == null
                  ? void 0
                  : a.existsDrawer()) != null
                ? r
                : !1,
            c = N.current;
          return ((i = i || (u && !!(c != null && c.containsDOMNode(t)))), i);
        },
        me = function () {
          switch (o("WAWebConnModel").Conn.tos) {
            case 1:
            case 2:
              o("WAWebModalManager").ModalManager.open(
                h.jsx(r("WAWebTosModal.react"), {}),
                { blockClose: !0 },
              );
              break;
            case 3:
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "TOS (terms of service) stage number 3, logging out",
                  ])),
              ),
                o("WAWebSocketModel").Socket.logout());
              break;
            default:
              break;
          }
        },
        pe = function () {
          o("WAWebConnModel").Conn.smbTos &&
            o("WAWebModalManager").ModalManager.open(
              h.jsx(r("WAWebBizSmbTosModal.react"), {}),
              { blockClose: !0 },
            );
        },
        _e = function () {
          o("isNonZeroNumber").isNonZeroNumber(
            r("WAWebNoticeModel").noticeId,
          ) &&
            r("WAWebNoticeModel").blocking === !0 &&
            o("WAWebModalManager").ModalManager.open(
              h.jsx(r("WAWebUserNoticeModal.react"), {
                notice: r("WAWebNoticeModel"),
              }),
              { blockClose: !0 },
            );
        },
        fe = function (t) {
          for (
            var e = t.target,
              n = function (t) {
                return (
                  (t instanceof HTMLElement &&
                    t.getAttribute("contentEditable")) ||
                  t instanceof HTMLInputElement
                );
              },
              a = 0;
            a < 5;
            a++
          ) {
            if (n(e)) return;
            e = e.parentNode;
          }
          (r("WAWebKeyboardShortcutsPopup.react") &&
            o("WAWebModalManager").ModalManager.open(
              h.jsx(r("WAWebKeyboardShortcutsPopup.react"), {}),
            ),
            t.preventDefault());
        },
        ge = function () {
          var e;
          (e = M.current) == null || e.abort();
        };
      (o("WAWebLoggerImpl").Logger.setSkipLoggingForProdLowEndDevice(),
        o("WAWebLoggerImpl").Logger.maybeUpdateLogCapacityFromABProp(),
        v(function () {
          var e,
            t,
            n = ["color-refresh"];
          if (
            (o("WAWebConnModel").Conn.isSMB && n.push("smb-colors"),
            (e = document.body) == null || (t = e.classList).add.apply(t, n),
            !o("WAWebAssetLoaderSingleton").AssetLoader.isAssetLoaded(
              "bg-chat-beige",
            ))
          ) {
            var r = o("WAWebThemeContext").THEME_ASSETS.lightRefreshed.find(
              function (e) {
                var t = e.id;
                return t === "bg-chat-beige";
              },
            );
            if (r == null) return;
            o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(
              r,
              o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD,
              !1,
            );
          }
          o("WAWebThemeContext").resetPwaTitlebarColor();
        }, []),
        v(
          function () {
            if (d) {
              var e;
              (o("WAWebRobotoVariableFontLoadable").requireRobotoVariableFont(),
                (e = document.body) == null || e.classList.add("roboto-font"));
            } else {
              var t;
              (t = document.body) == null || t.classList.remove("roboto-font");
            }
          },
          [d],
        ),
        v(function () {
          var e;
          ((o("WAWebStreamModel").Stream.uiActive = !0),
            document.hasFocus() &&
              document.visibilityState !== "hidden" &&
              o("WAWebStreamModel").Stream.markAvailable());
          var t = o("WAWebConnModel").Conn.platform;
          (r("WAWebEmojiSetup")(
            o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
          ),
            o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(t),
            r("WAWebKeyboardManager").menuBatchRenderWith(function () {
              r("WAWebKeyboardManager").trigger(
                r("WAWebKeyboardEventConstants").Event +
                  ":" +
                  r("WAWebKeyboardEventConstants").Events.LOGGED_IN,
              );
            }),
            P(!0, M, B),
            o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() &&
              o("WAWebAnimatedEmojiAssetLoader").initAnimatedEmojiAssets(t),
            o("WAWebConnModel").Conn.isSMB && pe(),
            me(),
            _e(),
            o("WAWebUA").UA.isSafari &&
              !o("WAGetUserMedia").getUserMedia &&
              o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
                o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT,
              ) &&
              (self.setTimeout(function () {
                o("WAWebModalManager").ModalManager.open(
                  h.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: o("WAWebModalManager").closeModalManager,
                    okText: u._(/*BTDS*/ "OK, got it"),
                    children: h.jsx(
                      o("WAWebSafariLimited").SafariLimitedText,
                      {},
                    ),
                  }),
                );
              }, 250),
              o("WAWebUserPrefsNuxPreferences").setNUX(
                o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT,
                { views: 1 },
              )));
          var n = r("WAWebChatPreferenceCollection").get(
            o("WAWebChatPreferenceModel").DEFAULT_PREFERENCE,
          );
          if (n && o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER !== n.wallpaper) {
            var a = s.theme;
            if (!o("WAWebWallpaper").colorExistsInTheme(n.wallpaper, a)) {
              var i = a === "light" ? "dark" : "light";
              if (o("WAWebWallpaper").colorExistsInTheme(n.wallpaper, i)) {
                var l = o("WAWebWallpaper").toggleWallpaperColor(
                  n.wallpaper,
                  i,
                );
                n.set("wallpaper", l);
              }
            }
          }
          (o(
            "WAWebOpenNotificationsSetting",
          ).handleOpenNotificationsSettingDeeplink(),
            I == null || (e = I.appActivationBridge) == null || e.initialize());
        }, []),
        v(function () {
          var e, t;
          ((e = o("WAWebWamAppLaunchReporter").getAppLaunchReporter()) ==
            null || e.commitAppLaunchWamEvent(),
            I == null ||
              (t = I.getDebugFeatures()) == null ||
              t.startHangsMonitor(),
            o("WAWebPageLoadLogging").endPageLoadQpl(!1),
            n("cr:21198") == null ||
              n("cr:21198").initPerformanceObserver({
                longtask: { enabled: r("justknobx")._("4665") },
                longAnimationFrame: { enabled: !1 },
              }),
            o("WAWebCanonicalUtils").logCanonicalPageLoadMetrics());
        }, []),
        v(function () {
          o("WAWebABProps").getABPropConfigValue(
            "web_rating_and_review_contextual_prompt_enabled",
          ) &&
            !r("gkx")("4112") &&
            (o(
              "WAWebAppRatingActiveUsageDays",
            ).updateActiveUsageDaysSinceDialogOpened(),
            o("WAWebAppRatingDialogTrigger").checkAndTriggerAppRatingDialog());
        }, []),
        r("useWAWebOnUnmount")(function () {
          (W.current.cancel(),
            r("WAWebKeyboardManager").menuBatchRenderWith(function () {
              r("WAWebKeyboardManager").trigger(
                r("WAWebKeyboardEventConstants").Event +
                  ":" +
                  r("WAWebKeyboardEventConstants").Events.LOGGED_OUT,
              );
            }),
            r("WAWebURLUtils").canMuckHistory() &&
              !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() &&
              window.history.back(),
            (o("WAWebStreamModel").Stream.uiActive = !1),
            ge());
        }));
      var he = r("WAWebURLUtils").canMuckHistory();
      (o("useWAWebListener").useListener(he ? window : null, "popstate", D),
        v(function () {
          he && D();
        }, []),
        v(function () {
          var e = getComputedStyle(document.documentElement);
          e.getPropertyValue("--WDS-accent") ||
            r("WAWebODS").incr("web.app.cssLoadError");
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebConnModel").Conn,
          "change:tos",
          me,
        ),
        o("useWAWebListener").useListener(
          o("WAWebConnModel").Conn.isSMB ? o("WAWebConnModel").Conn : null,
          "change:smbTos",
          pe,
        ),
        o("useWAWebListener").useListener(
          r("WAWebNoticeModel"),
          ["change:blocking", "change:noticeId"],
          _e,
        ),
        o("useWAWebListener").useListener(
          document,
          "wheel",
          o("WAWebMouseManager").mouseWheelListener,
        ));
      var ye = function () {
        (B.current == null || B.current(), (B.current = null));
      };
      (o("useWAWebListener").useListener(
        document,
        ["mousemove", "scroll", "keydown"],
        ye,
      ),
        o("useWAWebListener").useListener(window, ["focus", "resize"], ye),
        v(function () {
          o("WAWebDeviceCapabilitiesBootstrap").bootstrapDeviceCapabilities();
        }, []),
        v(function () {
          o("WAWebEligibilityLogging").eligibilityLogger.init();
        }, []),
        v(function () {
          o(
            "WAWebIntegrityChallengeGatingUtils",
          ).isIntegrityCheckpointEnabled() &&
            L.load()
              .then(function (e) {
                e.initIntegrityCheckpointOpener();
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[integrity-challenge] failed to load checkpoint opener",
                      ])),
                  )
                  .sendLogs("integrity-challenge-opener-load-failed");
              });
        }, []));
      var Ce = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = { three: U, two: !U, "app-animating": G }),
          (t._aigs = !0),
          (t._as6h = !0),
          t),
          (_ || (_ = r("stylex")))([w.app, !l && w.appNoAnimation]),
        ),
        be,
        ve;
      (n("cr:593") != null && g && (ve = h.jsx(n("cr:593"), {})),
        o("useWAWebExternalBetaOptIn").useExternalBetaValidator());
      var Se = h.jsxs("div", {
          className:
            "x10l6tqk x13vifvy x1o0tod x78zum5 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl",
          children: [
            h.jsx("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                "_aigw",
                "_as6h",
                g && "_asu3",
                _([
                  w.paneOneDrawerWithNavBar,
                  w.pane,
                  w.paneOne,
                  w.sidePaneMaxWidth,
                  w.paneOneDrawer,
                  g && [
                    w.paneWindowsHybrid,
                    w.paneOneWindowsHybrid,
                    w.sidePaneWidthWindowsHybrid,
                  ],
                  w.navbarBorder,
                ]),
              ),
              style: J,
              "data-testid": void 0,
              children: h.jsx(o("hero-tracing").HeroPagelet, {
                name: "Left Drawer Manager",
                observeTextMutation: !0,
                children: F,
              }),
            }),
            h.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr",
                  },
                  1: {
                    className:
                      "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk",
                  },
                }[!!g << 0],
                {
                  "data-testid": void 0,
                  children: h.jsx(o("hero-tracing").HeroPagelet, {
                    name: "Mid Drawer Manager",
                    observeTextMutation: !0,
                    children: O,
                  }),
                },
              ),
            ),
          ],
        }),
        Re = h.jsx("div", {
          className:
            "x10l6tqk x13vifvy x78zum5 x5yr21d x6ikm8r x10wlt62 x47corl x8qhkwt xdmgpyl x1oy9qf3",
          "data-testid": void 0,
          children: h.jsx(
            o("WAWebDrawerManager.react").DrawerManagerComponent,
            { direction: o("WAWebDrawerManager.react").Dir.FULLSCREEN },
          ),
        }),
        Le = C(
          function (e) {
            (o("WAWebCmd").Cmd.closeActiveChat(), ae(e));
          },
          [ae],
        ),
        Ee = h.jsx(r("WAWebStrictMode.react"), {
          children: h.jsx(o("WAWebNavigationBar.react").NavigationBar, {
            headerRef: T,
            activeNavBarItem: re,
            updateActiveNavBarItem: Le,
          }),
        }),
        ke = h.jsx(r("WAWebStrictMode.react"), {
          children: h.jsx(r("WAWebChatlistPanelWrapper.react"), {
            leftDrawerStyle: J,
            resizeHandle: Z,
            chatlistHeaderRef: T,
            handleActiveNavBarItemUpdate: ae,
            chatlistPanelRef: x,
            leftPaneClassName: o(
              "WAWebClassnames",
            ).classnamesConvertMeToStylexPlease(
              ((a = {}), (a._aigw = !0), (a._as6h = !0), (a._asu3 = g), a),
              _(
                w.pane,
                w.paneOne,
                w.sidePaneMaxWidth,
                o("WAWebUISpacing").uiPadding.start1,
                g && w.sidePaneWidthWindowsHybrid,
                K && w.chatlistHiddenDuringFullscreen,
              ),
            ),
          }),
        }),
        Ie = h.jsx(r("WAWebConversationWrapper.react"), {
          animate: l,
          conversationRef: N,
          paneTwoProps: {
            className:
              "x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2",
          },
        }),
        Te = h.jsx("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((i = {}), (i["_aig-"] = !0), (i._as6h = !0), (i._asu3 = g), i),
            _([
              w.pane,
              w.paneBorderLeft,
              U && w.rightDrawerIn,
              U && g && w.sidePane3WidthWindowsHybrid,
            ]),
          ),
          style: ee,
          ref: $,
          "data-testid": void 0,
          children: h.jsx(
            o("WAWebDrawerManager.react").DrawerManagerComponent,
            {
              direction: o("WAWebDrawerManager.react").Dir.RIGHT,
              onDrawerAnimationComplete: le,
              animationDisabled: !0,
            },
          ),
        }),
        De = E ? h.jsx(E, {}) : null,
        xe = k ? h.jsx(k, {}) : null,
        $e = n("cr:21265") ? h.jsx(n("cr:21265"), {}) : null,
        Pe = n("cr:21419") ? h.jsx(n("cr:21419"), {}) : null,
        Ne = n("cr:22855") ? h.jsx(n("cr:22855"), {}) : null,
        Me = n("cr:683") ? h.jsx(n("cr:683"), {}) : null,
        we = n("cr:12406") ? h.jsx(n("cr:12406"), {}) : null,
        Ae = f
          ? h.jsx("div", {
              id: "" + r("WDSToastContainerID"),
              className:
                "xixxii4 x191j7n5 xzwoauc xz4gtu xevlxbw xc9l9hb x47corl",
            })
          : null;
      return h.jsx(
        o("WAWebActiveAccountInfoContext.react").ActiveAccountInfoProvider,
        {
          children: h.jsx(
            o("WAWebNativeAdsExperimentInfoContext.react")
              .NativeAdsExperimentInfoProvider,
            {
              children: h.jsx(
                o("WAWebDrawerManagerContext").DrawerManagerContextProvider,
                {
                  onDrawerStateChange: ie,
                  children: h.jsx(
                    o("WAWebAppContext.react").AppContextProvider,
                    {
                      rightDrawerOpen: U,
                      activeNavBarItem: re,
                      children: h.jsxs("div", {
                        className: "x78zum5 xdt5ytf x5yr21d",
                        children: [
                          ve,
                          h.jsx(o("WAWebUimUie.react").UIE, {
                            uimState: o("WAWebUim").UIMState.INACTIVE,
                            displayName: "Main",
                            children: h.jsxs(
                              r("WAWebKeyboardTopLevelHotKeys.react"),
                              {
                                className: Ce,
                                onBlur: X,
                                ref: y,
                                onShowKeyboardShortcuts: fe,
                                skipNode: de,
                                children: [
                                  h.jsx(
                                    r("WAWebNotificationManager.react"),
                                    {},
                                  ),
                                  De,
                                  xe,
                                  h.jsx(r("WAWebActionListener"), {
                                    activeNavBarItem: re,
                                    updateActiveNavBarItem: Le,
                                  }),
                                  h.jsx(
                                    o("WAWebPipManager.react").PiPManager,
                                    {},
                                  ),
                                  h.jsx(
                                    o("WAWebErrorBoundary.react").ErrorBoundary,
                                    {
                                      name: "time-spent-logger",
                                      sendLogs: !0,
                                      children: h.jsx(
                                        r("WAWebWamTimeSpentLogger"),
                                        {},
                                      ),
                                    },
                                  ),
                                  h.jsx(
                                    r("WAWebInternDogfoodingModal.react"),
                                    {},
                                  ),
                                  be,
                                  Ee,
                                  Re,
                                  Se,
                                  ke,
                                  Ie,
                                  Te,
                                  $e,
                                  Pe,
                                  Ne,
                                  Me,
                                  we,
                                  Ae,
                                ],
                              },
                            ),
                          }),
                        ],
                      }),
                    },
                    ue,
                  ),
                },
              ),
            },
          ),
        },
      );
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e, t) {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            ref: e,
            children: h.jsx(
              o("WAWebDrawerManager.react").DrawerManagerComponent,
              { direction: o("WAWebDrawerManager.react").Dir.LEFT },
            ),
          }),
          h.jsx(t, {}),
        ],
      });
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e, t) {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx("div", {
            ref: e,
            children: h.jsx(
              o("WAWebDrawerManager.react").DrawerManagerComponent,
              { direction: o("WAWebDrawerManager.react").Dir.MID },
            ),
          }),
          h.jsx(t, {}),
        ],
      });
    }
    ((O.displayName = O.name + " [from " + i.id + "]"),
      (l.hasPendingActions = x),
      (l.MainComponent = A));
  },
  226,
);
