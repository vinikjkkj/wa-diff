__d(
  "WAWebAppBootstrap",
  [
    "JSResource",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebAppSwInitializer",
    "WAWebBackendWorkerInitState",
    "WAWebBrLastUsedPaymentMethodCache",
    "WAWebBrokerBackendInterface",
    "WAWebBuildConstants",
    "WAWebCacheStoreGatingUtil",
    "WAWebClientFeatureFlags",
    "WAWebConfigureWindowEvents",
    "WAWebCrashAnnotations",
    "WAWebDebugSetup",
    "WAWebDeleteGuestSessionOnWebLoad",
    "WAWebDesktopUpsellUtils",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEnvironment",
    "WAWebEventSamplingCache",
    "WAWebFrontendL10nHelpers",
    "WAWebGlobals",
    "WAWebHandlePreviousLogout",
    "WAWebImagineActionMediaInputLogging",
    "WAWebInfraErrorLogger",
    "WAWebInvocationInterface",
    "WAWebKeyboardShortcuts",
    "WAWebLoggerOnError",
    "WAWebLoginBounceGuard",
    "WAWebLoomStuckTraceEviction",
    "WAWebMainThreadLogger",
    "WAWebMetricsAttributionObservers",
    "WAWebODS",
    "WAWebPageLoadLoggingImpl",
    "WAWebPrefetchHatchDetailsOnLogin",
    "WAWebRunInTransaction",
    "WAWebStorageErrorHandlingUtils",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebTransitions",
    "WAWebUim",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWam",
    "WAWebWamPageLoadReporter",
    "WAWebWamWorkerSpecificEvents",
    "WAWebWidToJid",
    "WAWebWindowsHybridBridgeInitiator",
    "WDSShortcutResolver",
    "asyncToGeneratorRuntime",
    "cr:13019",
    "cr:17219",
    "cr:17677",
    "cr:34988",
    "cr:5203",
    "getErrorSafe",
    "gkx",
    "initWAWebPlatformWebPage",
    "velocity-animate",
    "velocity-animate-ui",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("JSResource")("WAWebPrefetchDiscoveryStickerPacks").__setRef(
        "WAWebAppBootstrap",
      ),
      p = (e = n("cr:13019")) != null ? e : {},
      _ = p.reportPotentialWebDataLoss,
      f = null;
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (f != null || (f = y()), f);
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, a, i;
          (r("WAWebODS").incr("web.app.bootstrap"),
            n("cr:5203") == null || n("cr:5203")(),
            o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(),
            o("WDSShortcutResolver").registerWDSShortcutResolver(
              o("WAWebKeyboardShortcuts").getWDSShortcuts,
            ),
            o("WAWebInfraErrorLogger").addListenerToErrorPubSub(),
            (window.onerror = o("WAWebLoggerOnError").onErrorHandler),
            (window.onunhandledrejection =
              o("WAWebLoggerOnError").onUnhandledPromiseRejection),
            r("initWAWebPlatformWebPage")(),
            o(
              "WAWebSyncdUploadFatalErrorMetric",
            ).initialiseFatalErrorMetricUploading(),
            o("WAWebCrashAnnotations").annotateCrashWithRecentLoads(),
            o("WAWebCrashAnnotations").annotateCrashWithPlatform(),
            yield o(
              "WAWebDeleteGuestSessionOnWebLoad",
            ).maybeDeleteGuestSessionOnWebLoad(),
            yield o("WAWebHandlePreviousLogout").handlePreviousLogoutFailures(),
            o("WAWebLoginBounceGuard").resetLoginBounceCount(),
            o("WAWebPageLoadLoggingImpl").setPageLoadLoggingImpl(),
            o("WAWebABPropsCache").initializeABPropsCache(),
            o("WAWebClientFeatureFlags").overwriteDebugFeatures());
          var l =
              (e = n("cr:17219")) == null
                ? void 0
                : e.getWindowsBridge(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebAppBootstrap,
                  ),
            p = (t = n("cr:34988")) != null ? t : {},
            f = p.initializeWindowsSettingChangeHandlers;
          (f == null || f(),
            r("WAWebEnvironment").isWindows &&
              o("WAWebUserPrefsBase").userPreferencesStoreBase.set(
                o("WAWebUserPrefsKeys").UserPrefs
                  .WindowsIsAdaptiveLayoutEnabled,
                !0,
              ),
            l == null || (a = l.abProps) == null || a.initialize(),
            o("WAWebEventSamplingCache").initializeEventSamplingCache(),
            o("WAWebWam").initWamRuntime(),
            l == null || (i = l.wam) == null || i.initialize(),
            o(
              "WAWebMetricsAttributionObservers",
            ).initializeMetricsAttributionObservers(),
            o("WAWebLoomStuckTraceEviction").initWebLoomStuckTraceEviction(),
            n("WAWebWamWorkerSpecificEvents"),
            o("WAWebWamPageLoadReporter").exeTimer.start(),
            (window.Velocity = n("velocity-animate")),
            n("velocity-animate-ui"),
            n("WAWebTransitions").registerEffects(),
            o("WAWebInvocationInterface").set(r("WAWebBrokerBackendInterface")),
            o("WAWebDebugSetup").setupDebugGlobal(),
            o("WAWebConfigureWindowEvents").configureWindowEvents());
          try {
            o("WAWebEmojiKeywordToUnicode").updateEmojiTrie();
          } catch (e) {
            var g = r("getErrorSafe")(e);
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[emoji-trie] EmojiKeywordToUnicode setup failed: ",
                    ", stack: ",
                    "",
                  ])),
                e,
                g.stack,
              )
              .sendLogs(
                "[emoji-trie] EmojiKeywordToUnicode setup failed: " + g.message,
              );
          }
          (o("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl(),
            o(
              "WAWebFrontendL10nHelpers",
            ).mungeWAWebLocaleOverrideFromUrlIfNecessary(),
            o("WAWebWamPageLoadReporter").exeTimer.end(),
            r("gkx")("16539") && o("WAWap").enableXMLFormat(),
            o(
              "WAWebDesktopUpsellUtils",
            ).isWebUserOnSupportedWindowsOSForUWPAsync());
          var h = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            y = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1),
            C = o("WAWebWidToJid").widToMyJids(h);
          (o("WAWebGlobals").setGlobals({
            jidUtils: o("WAJids").createJidUtils({ platform: "whatsapp" }),
            myJids: C,
            lidDeviceJid: y == null ? void 0 : y.toString(),
            runInTransaction: o("WAWebRunInTransaction").runInTransaction,
          }),
            o("WAWebUserPrefsMultiDevice").isRegistered() &&
              o("WAWebBackendWorkerInitState").resolveJidsReady(),
            o("WAWebCacheStoreGatingUtil").initStorageOptimizationFlags(),
            o("WAWebAppSwInitializer").initializeSw({
              swScriptPath: "/sw.js",
              swScope: "/",
            }),
            o("WAWebStorageErrorHandlingUtils").persistAppReloadMarker(),
            r("WAWebEnvironment").isWindows && h == null && (_ == null || _()),
            o("WAWebUim").setupUimListeners(),
            m.load().then(
              function (e) {
                var t = e.initDiscoveryStickerPackPrefetch;
                return t();
              },
              function (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to load discovery sticker prefetch",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("discovery-sticker-prefetch-load-failed");
              },
            ),
            o(
              "WAWebPrefetchHatchDetailsOnLogin",
            ).initHatchDetailsPrefetchOnLogin(),
            o(
              "WAWebBrLastUsedPaymentMethodCache",
            ).initLastUsedBrPaymentMethodCacheLifecycle(),
            o(
              "WAWebImagineActionMediaInputLogging",
            ).initImagineActionMediaInputLogging(),
            n("cr:17677") == null || n("cr:17677").init(),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] bootstrap done",
                ])),
            ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[app] version: ",
                  "",
                ])),
              o("WAWebBuildConstants").VERSION_STR,
            ));
        })),
        C.apply(this, arguments)
      );
    }
    l.bootstrapApp = g;
  },
  98,
);
